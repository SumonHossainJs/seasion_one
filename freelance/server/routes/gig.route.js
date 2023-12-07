import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createGig, deleteGig, getGig, uipdateGig } from '../controllers/gig.control.js';



const router = express.Router();

router.get('/get/:id', getGig);
router.post('/add',verifyToken, createGig);
router.put("/update/:id",verifyToken,uipdateGig);
router.delete('/delete/:id',verifyToken, deleteGig);


export default router;