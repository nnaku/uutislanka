import React, { useState, useEffect } from 'react';
import cl from 'classnames';
import { Paper } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, ListSubheader, } from '@material-ui/core';
import FeedItem from 'components/FeedItem'
import http from 'utils/http';
import Reader from 'components/Reader';

function Main({ classes, match, history }) {
  const [reader, setReader] = useState(null);
  const [feed, setFeed] = useState({ docs: [] });
  const url = match.params.category ? `/${match.params.category}` : '/';
  const getFirstPage = () => http({ url }).then(setFeed)

  useEffect(() => { 
    http({ 
      url: match.params.category ? `/${match.params.category}` : '/'
    })
      .then(setFeed)
    }, [match.params.category]);

  const getNext = () => http({ url, params: { page: feed.page + 1 } }).then(nextPage => setFeed({ ...nextPage, docs: [...feed.docs, ...nextPage.docs] }))

  return (
    <Paper component="main" className={cl(classes.root)}>
      <List className={cl(classes.list)}>
        <ListSubheader>{match.params.category}</ListSubheader>
        <InfiniteScroll
          dataLength={feed.docs.length} //This is important field to render the next data
          next={getNext}
          hasMore={feed.page < feed.pages}
          loader={'Loading...'}
          endMessage={'Yay! You have seen it all'}
          children={feed.docs}
          // below props only if you need pull down functionality
          refreshFunction={getFirstPage}
          pullDownToRefresh
          pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
          releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
        >
          {feed.docs.map(item => <FeedItem key={item.guid} item={item} />)}
        </InfiniteScroll>
      </List>
      <Reader url={reader} setReader={setReader} />
    </Paper>
  );
}



export default Main;
