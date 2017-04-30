'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = require('../models/item.model');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function read(req, res) {
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

function readOne(req, res) {
  _item2.default.findOne({ _id: req.params.id }).then(function (results) {
    return res.json(results);
  });
};

function update(req, res) {
  var body = req.body;
  _item2.default.update({ _id: req.params.id }, { $set: body }).then(function (results) {
    return res.json(results);
  }).catch(function (e) {
    return next(e);
  });
};

function remove(req, res) {
  var query = { _id: [req.params.id] };
  _item2.default.remove(query).then(function (deleted) {
    return res.json(deleted);
  }).catch(function (e) {
    return next(e);
  });
};
//search on user
/*
function echo(req, res) {
  //let title= req.body.title
  res.json(req.body)
  /*Item.find({title: req.body.title})
    .then(results => res.json(results))*/
//function delete по id
//function update по id

exports.default = { read: read, readOne: readOne, create: create, update: update, remove: remove };