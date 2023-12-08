import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { craeteAReview, getReview } from '../controllers/review.control.js';



const router = express.Router();

router.post('/', verifyToken, craeteAReview);
router.get("/", getReview);


export default router;