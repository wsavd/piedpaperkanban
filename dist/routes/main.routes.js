'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../controllers/index.controller');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//GET /api/v1/users - Get list of items
router.get('/items', _index2.default.load);
//POST /api/v1/items - Create new item
router.post('/items', _index2.default.create);

// Exporting an object as the default import for this module
exports.default = router;