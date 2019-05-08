const cron = require('node-cron');
const parser = require('./parser')
const models = require('./models')
const sources = require('./sources')

/* running a task every minute */
console.log('cron jobs runnign every minute');
cron.schedule('* * * * *', () => {
  console.log('Parsing sources');
  sources.map(source =>
    parser(source)
      .then(({ feed, items }) => {
        return models.Feed.findOneAndUpdate({ feedUrl: feed.feedUrl }, feed, { new: true, upsert: true })
          .then(feed => ({ feed, items }))
      })
      .then(({ feed, items }) => {
        return Promise.all(
          items.map(({ categories, ...rest }) => models.Item.findOneAndUpdate(
            { guid: rest.guid },
            { ...rest, $addToSet: { 'categories': categories, "feeds": feed } },
            { setDefaultsOnInsert: true, new: true, upsert: true }
          ))
        )
      })
  )

});
