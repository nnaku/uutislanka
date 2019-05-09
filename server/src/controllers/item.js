const Item = require('../models').Item
const sanitize = require('mongo-sanitize');
exports.getAll = function (req, res) {
  let page = parseInt(req.query.page)
  page = isNaN(page) ? 1 : page
  let limit = parseInt(req.query.limit)
  limit = isNaN(limit) ? 30 : limit

  let find = { }

  if (req.query.defaults) {
    find.categories = { 
      $in: sanitize(req.query.defaults)
    }
  }
console.log(sanitize(req.query.defaults));
  if (req.query.ignore) {
    find.categories = { 
      ...find.categories,
      $nin: sanitize(req.query.ignore)
    }
  }

  Item
    .paginate(find, {
      populate: {
        path: 'feeds',
        model: 'Feed',
      },
      sort: [['isoDate', -1]],
      limit,
      page

    })
    .then(result => res.json(result))
}

exports.getCategory = function (req, res) {
  let page = parseInt(req.query.page)
  page = isNaN(page) ? 1 : page
  let limit = parseInt(req.query.limit)
  limit = isNaN(limit) ? 30 : limit

  let find = { categories: { $in: sanitize([req.params.category]) } }

  if (req.query.ignore) {
    find.categories = { ...find.categories, $nin: sanitize(req.query.ignore) }
  }

  console.log(find);
  Item
    .paginate(find, {
      populate: {
        path: 'feeds',
        model: 'Feed',
      },
      sort: [['isoDate', -1]],
      limit,
      page

    })
    .then(result => res.json(result))
}
