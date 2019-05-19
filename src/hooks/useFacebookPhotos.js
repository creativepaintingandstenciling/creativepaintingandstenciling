import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { allFacebookPhotos } = useStaticQuery(
    graphql`
      query FacebookPhotos {
        allFacebookData {
          nodes {
            id
          }
        }
      }
    `
  );

  return allFacebookPhotos.nodes;
};
