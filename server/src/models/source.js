const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
  url: {
    type: String,
    unique: true,
    index: true,
  },
  categories: [String]
},
  { usePushEach: true }
);

sourceSchema.plugin(require('mongoose-unique-validator'));
sourceSchema.plugin(require('mongoose-unique-array'));

module.exports = mongoose.model('Source', sourceSchema);


