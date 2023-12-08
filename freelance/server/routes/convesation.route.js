import express from 'express';
import { verifyToken } from '../middleware/jwt.js';



const router = express.Router();

router.post('/',verifyToken, );
router.get('/:id', verifyToken, );



export default router;