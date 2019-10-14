const parser = require('./parser');
const models = require('./models');

const parseFeed = async feed =>
  await parser({
    publisher: feed.feed,
    url: feed.feedUrl,
    tags: feed.categories,
  });

/* running a task every minute */
console.log('cron jobs runnign every minute');
!(async function() {
  console.log('Parsing sources:');
  models.Feed.find({})
    .then(feeds => Promise.all(feeds.map(parseFeed)))
    .catch(e => console.log('parseFeed', e))
    .then(parsedFeeds =>
      Promise.all(
        parsedFeeds.map(({ feed, items }) =>
          Promise.all(
            items.map(({ categories, ...rest }) =>
              Promise.all(
                models.Item.findOneAndUpdate(
                  { guid: rest.guid },
                  {
                    ...rest,
                    $addToSet: { categories: categories, feeds: feed },
                  },
                  { setDefaultsOnInsert: true, new: true, upsert: true }
                )
              )
            )
          )
        )
      )
    )
    .catch(e => console.error(e));
})();
