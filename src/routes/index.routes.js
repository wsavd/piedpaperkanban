import express from 'express';
const router = express.Router();

import cardCtrl from '../controllers/card.controller'

//GET /api/v1/items - Get list of items
router.get('/items', cardCtrl.read);
//GET /api/v1/items/:id - Get specific item
router.get('/items/:id', cardCtrl.readSingle);

//POST /api/v1/items - Create a new item
router.post('/items', cardCtrl.create);

//PUT /api/v1/items/:id - Update specific item
router.put('/items/:id', cardCtrl.update)

//DELETE /api/v1/items/:id - Delete specific item
router.delete('/items/:id', cardCtrl.remove);


//router.post('/echo', cardCtrl.echo);

// Exporting an object as the default import for this module
export default router;
