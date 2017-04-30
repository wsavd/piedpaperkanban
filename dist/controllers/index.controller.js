'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = require('../models/item.model');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(req, res) {
  _item2.default.find().then(function (results) {
    return res.json(results);
  });
}

function create(req, res) {
  var item = new _item2.default({
    title: req.body.title
  });

  item.save().then(function (savedItem) {
    return res.json(savedItem);
  });
}

exports.default = { load: load, create: create };