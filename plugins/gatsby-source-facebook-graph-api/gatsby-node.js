const crypto = require('crypto');
const graph = require('fbgraph');

graph.setVersion('3.3');

const getData = (from, params = {}) => {
  return new Promise((resolve, reject) => {
    graph.get(from, params, (err, res) => {
      if (err) {
        return reject(err);
      }
      if (!res) {
        return reject(new Error('Response is empty!'));
      }
      resolve(res);
    });
  });
};

const titleCase = str => {
  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

exports.sourceNodes = async ({ boundActionCreators, createNodeId }, pluginOptions = {}) => {
  graph.setAccessToken(pluginOptions.key);

  const { createNode } = boundActionCreators;

  const processData = (place, type, data) => {
    if (type === 'Hours') {
      data = { hours: Object.entries(data) };
    }

    if (typeof data !== 'object') {
      console.log('Data is not an object, skipping!');
      return;
    }

    const nodeId = createNodeId(`${place}_${type}_${data.id}`);
    const nodeContent = JSON.stringify(data);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Facebook${type}`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });

    return nodeData;
  };

  for (const place of pluginOptions.places) {
    const data = await getData(`${place}`, pluginOptions.params);

    Object.entries(data).forEach(([type, typeData]) => {
      type = titleCase(type);
      let arr = [];
      if (Array.isArray(typeData.data)) {
        arr = typeData.data;
      } else {
        arr = [typeData];
      }
      arr.forEach(thing => {
        const nodeData = processData(place, type, thing);

        if (nodeData) {
          return createNode(nodeData);
        }
      });
    });
  }
};
