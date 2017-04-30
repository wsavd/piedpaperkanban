import express from 'express';
const router = express.Router();

import indexCtrl from '../controllers/index.controller'

//GET /api/v1/users - Get list of items
router.get('/items', indexCtrl.load);
//POST /api/v1/items - Create new item
router.post('/items', indexCtrl.create);

// Exporting an object as the default import for this module
export default router;
