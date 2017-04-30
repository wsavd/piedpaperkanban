'use strict';

var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
	releaseDate: {
		type: Date
	}
});

var Item = module.exports = mongoose.model('Item', ItemSchema);