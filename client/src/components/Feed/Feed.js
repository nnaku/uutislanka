import React, { useState, useEffect, Fragment } from 'react';
import cl from 'classnames';

import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Dialog, makeStyles } from '@material-ui/core';

import FeedItem from 'components/FeedItem';
import http from 'utils/http';
import Iframe from 'react-iframe';

const useStyles = makeStyles(theme => ({
  list: {
    padding: 0,
    maxWidth: '100%',
  },
  dialog: {
    minHeight: '75vh',
  },
}));

function Feed({ match, setCategory }) {
  const classes = useStyles();
  const [feed, setFeed] = useState({ docs: [] });
  const [expanded, setExpanded] = useState(null);
  const [preview, setPreview] = useState(false);

  function closePreview() {
    setPreview(false);
  }

  const url = match.params.category ? `/${match.params.category}` : '/';

  useEffect(() => {
    setCategory(url.replace('/', ''));
    http({ url }).then(feed => {
      setFeed(feed);
      window.scrollTo(0, 0);
    });
  }, [url]);

  const getNext = () =>
    http({ url, params: { page: feed.page + 1 } }).then(nextPage =>
      setFeed({ ...nextPage, docs: [...feed.docs, ...nextPage.docs] })
    );

  const expandHandler = guid => () =>
    guid === expanded ? setExpanded(null) : setExpanded(guid);

  return (
    <Fragment>
      <List className={cl(classes.list)}>
        <InfiniteScroll
          dataLength={feed.docs.length} //This is important field to render the next data
          next={getNext}
          hasMore={feed.page < feed.pages}
          loader={'Loading...'}
          endMessage={feed.docs.length ? 'Loppu!' : ''}
          children={feed.docs}
        >
          {feed.docs.map((item, index) => (
            <FeedItem
              key={item.guid}
              item={item}
              expanded={expanded === item.guid}
              setPreview={setPreview}
              toggleExpandedView={expandHandler(item.guid)}
            />
          ))}
        </InfiniteScroll>
      </List>
      <Dialog maxWidth="sm" fullWidth open={preview} onClose={closePreview}>
        <Iframe
          url={preview}
          width="100%"
          height="100%"
          id="myId"
          className={classes.dialog}
        />
      </Dialog>
    </Fragment>
  );
}

export default Feed;
