import Item from '../models/item.model';

function load(req, res) {
  Item.find()
    .then(results => res.json(results))
}

function create(req, res) {
  const item = new Item({
    title: req.body.title,
  });

  item.save()
    .then(savedItem => res.json(savedItem))
}

export default {load, create}