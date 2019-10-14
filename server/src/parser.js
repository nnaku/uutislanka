const Parser = require('rss-parser');
const _union = require('lodash').union;
const parser = new Parser({
  customFields: { item: [['content:encoded', 'contentHtml']] },
});

function isIn72h(date) {
  const oneDayAgo = new Date().getTime() - 3 * 1 * 24 * 60 * 60 * 1000;
  return oneDayAgo < new Date(date).getTime();
}

function formatItem({ categories, ...rest }, tags) {
  categories = categories.map(cat => cat.toLowerCase());
  tags = tags.map(tag => tag.toLowerCase());
  return {
    ...rest,
    categories: _union(categories, tags),
  };
}

async function parse({ publisher, tags, url }) {
  let source = '';
  try {
    source = await parser.parseURL(url);
  } catch (error) {
    console.error(url);
    console.error(error);
    throw error;
  }

  let { items, ...feed } = source;
  feed = { ...feed, publisher };
  feed = feed.feedUrl ? feed : { ...feed, feedUrl: url };
  return {
    feed,
    items: items
      .map(item => formatItem(item, tags, feed))
      .filter(({ pubDate }) => isIn72h(pubDate)),
  };
}

module.exports = parse;
