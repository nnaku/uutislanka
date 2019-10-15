const CronJob = require('cron').CronJob;
const parser = require('./parser');
const { Item, Feed } = require('./models');

/* running a task every minute */
const parseCron = new CronJob('0 * * * * *', async () => {
  console.log('Parsing...');
  const feeds = await Feed.find({});
  feeds.forEach(async feed => {
    try {
      const parsedFeed = await parser({
        publisher: feed.feed,
        url: feed.feedUrl,
        tags: feed.categories,
      });

      parsedFeed.items.forEach(async ({ categories, ...rest }) => {
        Item.findOneAndUpdate(
          { guid: rest.guid },
          {
            ...rest,
            $addToSet: { categories: categories, feeds: feed },
          },
          { setDefaultsOnInsert: true, new: true, upsert: true }
        );
      });
    } catch (error) {
      console.error('parser error', { error });
    }
  });
});

parseCron.start();
console.log('cron jobs runnign every minute');
