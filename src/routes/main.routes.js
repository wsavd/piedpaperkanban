import express from 'express';
const router = express.Router();

import indexCtrl from '../controllers/index.controller'

//GET /api/v1/items - Get list of items
router.get('/items', indexCtrl.read);
//GET /api/v1/items/:id - Get specific item
router.get('/items/:id', indexCtrl.readOne);

//POST /api/v1/items - Create a new item
router.post('/items', indexCtrl.create);

//PUT /api/v1/items/:id - Update specific item
router.put('/items/:id', indexCtrl.update)

//DELETE /api/v1/items/:id - Delete specific item
router.delete('/items/:id', indexCtrl.remove);


//router.post('/echo', indexCtrl.echo);

// Exporting an object as the default import for this module
export default router;
