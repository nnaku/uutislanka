import React, { useState, useEffect } from 'react';
import cl from 'classnames';

import InfiniteScroll from 'react-infinite-scroll-component';
import { List } from '@material-ui/core';
import FeedItem from 'components/FeedItem';
import http from 'utils/http';

function Feed({ classes, match, setCategory }) {
  const [feed, setFeed] = useState({ docs: [] });
  const [expanded, setExpanded] = useState(null);
  const url = match.params.category ? `/${match.params.category}` : '/';

  useEffect(() => {
    setCategory(url.replace("/", ""))
    http({ url }).then(feed => {
      setFeed(feed);
      window.scrollTo(0, 0);
    });
  }, [url]);

  const getNext = () => http({ url, params: { page: feed.page + 1 } }).then(nextPage => setFeed({ ...nextPage, docs: [...feed.docs, ...nextPage.docs] }))

  const expandHandler = guid => () => guid === expanded ? setExpanded(null) : setExpanded(guid)

  


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
        {feed.docs.map((item, index) => <FeedItem key={item.guid} item={item} expanded={expanded === item.guid} toggleExpandedView={expandHandler(item.guid)} />)}
      </InfiniteScroll>
    </List>
  );
}

export default Feed;
