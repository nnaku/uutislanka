import React, { useState, useEffect } from 'react';
import cl from 'classnames';
import { Paper } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Fade } from '@material-ui/core';
import FeedItem from 'components/FeedItem';
import http from 'utils/http';
import Reader from 'components/Reader';

function Main({ classes, match, history, setCategory }) {
  const [reader, setReader] = useState(null);
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
    <Paper component="main" className={cl(classes.root)}>
      <List className={cl(classes.list)}>
        <InfiniteScroll
          dataLength={feed.docs.length} //This is important field to render the next data
          next={getNext}
          hasMore={feed.page < feed.pages}
          loader={'Loading...'}
          endMessage={'Yay! You have seen it all'}
          children={feed.docs}
        >
          {feed.docs.map((item, index) => (
            <Fade in={feed.docs.length > 0} timeout={{ enter: 350, exit: 350 }}>
              <FeedItem key={item.guid} item={item} />
            </Fade>
          ))}
        </InfiniteScroll>
      </List>
      <Reader url={reader} setReader={setReader} />
    </Paper>
  );
}

export default Main;
