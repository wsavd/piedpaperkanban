'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _item = require('../models/item.model');

var _item2 = _interopRequireDefault(_item);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
    res.json('Hello from API on ES6');
}

function load(req, res) {
    _users2.default.find({}, function (err, results) {
        res.json(results);
    });
}

exports.default = { index: index, load: load };