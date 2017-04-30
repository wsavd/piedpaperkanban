import Item from '../models/item.model';
import User from '../models/user'

function index(req, res) {
    res.json('Hello from API on ES6');
}

function load(req, res) {
     User.find({}, function(err, results){
    res.json(results);
  });
}

export default {index, load}