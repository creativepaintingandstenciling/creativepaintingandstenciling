import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Bricks from 'bricks.js';

// import Masonry from '../components/masonry';
// import MasonryItem from '../components/masonryItem';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FB from '../containers/Facebook';
import useDataApi from '../hooks/useDataApi';
import InfiniteScroll from '../components/infiniteScroll';

// https://developers.facebook.com/docs/graph-api/reference/v3.3/page/photos
// https://developers.facebook.com/tools/explorer/?method=GET&path=matsandmutts%2Fphotos%3Ffields%3Dimages&version=v3.3

const GridItem = styled.div`
  width: calc(25% - 15px);
`;

const GridImg = styled.img`
  height: auto;
  width: 100%;
`;

const ACCESS_TOKEN =
  'EAAgooQ9tGVEBAJvQHPxZBW9n00yuMAHnTM6m4ZBMZCxZAfTRAxWhCveSTU9gI4jjRqvHP2tg9OQr1UD3zoU8iDieYBtr13LhxVkteioMKhMmHB5gZAMHz0iI3tCSXV5zP43Hl8mgO1ZCQqpkbaZBmY2oMg8ZAcKMS8vetDVePBEnqbC7ZBTnvtTZCQwhekZAjUZAZCsyTg6q43lwTmwZDZD';

function Portfolio() {
  const wrapperRef = useRef(null);
  const bricksRef = useRef(null);

  const [fb, setFacebookApi] = useState(null);

  useEffect(() => {
    const initApi = async () => {
      const api = new FB({
        domain: 'connect.facebook.net',
        appId: '2296472027339089',
        version: 'v3.3',
        cookie: false,
        status: false,
        xfbml: false,
        language: 'en_US',
        frictionlessRequests: false,
      });

      const fb = await api.init();
      setFacebookApi(fb);
    };

    initApi();
  }, []);

  // useEffect(() => {
  //   if (!fb) {
  //     return;
  //   }

  //   fb.api(`matsandmutts/posts?fields=full_picture&access_token=${ACCESS_TOKEN}&limit=30`, resp => {
  //     console.log(resp);
  //     // fb.api(resp.paging.cursors.after, r => console.log(r));
  //   });
  // }, [fb]);

  const initialUrl = `matsandmutts/posts?fields=full_picture&access_token=${ACCESS_TOKEN}&limit=30`;
  const [state, setShouldFetch] = useDataApi(fb, initialUrl, null);

  // console.log(data);

  useEffect(() => {
    bricksRef.current = Bricks({
      container: wrapperRef.current,
      sizes: [
        { columns: 2, gutter: 10 },
        { mq: '768px', columns: 3, gutter: 25 },
        { mq: '1024px', columns: 4, gutter: 50 },
      ],
      packed: 'data-packed',
      position: false,
    })
      .resize()
      .pack();

    window.foo = bricksRef; //.resize(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (bricksRef.current && state.data && state.data.length) {
      console.log('updated bricks');
      bricksRef.current.update();
    }
    // eslint-disable-next-line
  }, [state.isLoading]);

  const onFetch = () => {
    console.log('should fetch');
    setShouldFetch(true);
  };

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ paddingBottom: '40px' }}>
        <InfiniteScroll onLoadMore={onFetch}>
          <div ref={wrapperRef}>
            {(state.data || []).map((item, index) => (
              <GridItem key={index}>
                <GridImg key={index} src={item.full_picture} />
              </GridItem>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Layout>
  );
}

export default Portfolio;
