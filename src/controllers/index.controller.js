import Item from '../models/item.model';

function read(req, res) {
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

function readOne(req, res) {
    Item.findOne({_id: req.params.id})
      .then(results => res.json(results))
};

function update(req, res) {
	let body = req.body;
    Item.update({_id: req.params.id}, {$set:body})
      .then(results => res.json(results))
      .catch(e => next(e));
};

function remove(req, res) {
    let query = {_id: [req.params.id]};
	Item.remove(query)
      .then(deleted => res.json(deleted))
      .catch(e => next(e));
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

export default {read, readOne, create, update, remove}