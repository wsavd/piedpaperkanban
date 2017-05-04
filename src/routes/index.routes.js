import express from 'express';
const router = express.Router();

import cardCtrl from '../controllers/card.controller'

//GET /api/v1/cards - Get list of cards
router.get('/cards', cardCtrl.read);
//GET /api/v1/cards/:id - Get specific card
router.get('/cards/:id', cardCtrl.readSingle);

//POST /api/v1/cards - Create a new card
router.post('/cards', cardCtrl.create);

//PUT /api/v1/cards/:id - Update specific card
router.put('/cards/:id', cardCtrl.update)

//DELETE /api/v1/cards/:id - Delete specific card
router.delete('/cards/:id', cardCtrl.remove);


//router.post('/echo', cardCtrl.echo);

// Exporting an object as the default import for this module
export default router;
