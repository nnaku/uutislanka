const mongoose = require('mongoose');
const Types = mongoose.Types;
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  feedUrl: {
    type: String,
    unique: true,
    index: true,
  },
  categories: [String],
  image: {
    link: String,
    url: String,
    title: String
  },
  publisher: String,
  title: String,
  description: String,
  pubDate: Date,
  link: String,
  language: String,
  lastBuildDate: Date,

},
  {
    usePushEach: true
  }
);

feedSchema.plugin(require('mongoose-unique-validator'));
feedSchema.plugin(require('mongoose-unique-array'));

module.exports = mongoose.model('Feed', feedSchema);


