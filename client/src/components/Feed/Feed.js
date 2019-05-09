import React, { useState, useEffect } from 'react';
import cl from 'classnames';

import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Fade } from '@material-ui/core';
import FeedItem from 'components/FeedItem';
import http from 'utils/http';

function Feed({ classes, match, setCategory }) {
  const [feed, setFeed] = useState({ docs: [] });
  const url = match.params.category ? `/${match.params.category}` : '/';

  useEffect(() => {
    const { category } = match.params;
    setCategory(category)
    http({
      url: category ? `/${category}` : '/',
    }).then(feed => {
      setFeed(feed);
      window.scrollTo(0, 0);
    });
  }, [match.params.category]);

  const getNext = () =>
    http({ url, params: { page: feed.page + 1 } }).then(nextPage =>
      setFeed({ ...nextPage, docs: [...feed.docs, ...nextPage.docs] })
    );

  return (
    <List className={cl(classes.list)}>
      <InfiniteScroll
        dataLength={feed.docs.length} //This is important field to render the next data
        next={getNext}
        hasMore={feed.page < feed.pages}
        loader={'Loading...'}
        endMessage={feed.docs.length ? 'Loppu!' : ''}
        children={feed.docs}
      >
        {feed.docs.map((item, index) => <FeedItem key={item.guid} item={item} />)}
      </InfiniteScroll>
    </List>
  );
}

export default Feed;
