const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = Schema.Types;

const itemSchema = new Schema(
  {
    guid: {
      type: String,
      unique: true,
      index: true,
    },
    title: String,
    link: String,
    pubDate: Date,
    enclosure: {
      url: String,
      type: { type: String },
      length: String,
    },
    content: String,
    contentSnippet: String,
    contentHtml: String,
    isoDate: Date,
    feeds: [Types.ObjectId],
    categories: [String],
  },
  {
    usePushEach: true,
  }
);

itemSchema.plugin(require('mongoose-unique-validator'));
itemSchema.plugin(require('mongoose-unique-array'));
itemSchema.plugin(require('mongoose-paginate'));

module.exports = mongoose.model('Item', itemSchema);
