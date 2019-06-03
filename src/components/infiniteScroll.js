import { useEffect } from 'react';

function InfiniteScroll({ children, onLoadMore }) {
  useEffect(() => {
    const handleScroll = () => {
      console.log('hi');
      // if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('sup');
        onLoadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onLoadMore]);

  return children;
}

export default InfiniteScroll;
