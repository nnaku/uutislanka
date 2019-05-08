const Item = require('../models').Item

exports.getAll = function (req, res) {
  let page = parseInt(req.query.page)
  page = isNaN(page) ? 1 : page
  let limit = parseInt(req.query.limit)
  limit = isNaN(limit) ? 30 : limit
  let category = req.query.category


  Item
    .paginate({}, {
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
  let category = req.params.category

  Item
    .paginate({ categories: category }, {
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
