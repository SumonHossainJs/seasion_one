import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createConversation, getConversations, getSingleConversation, updateConversation } from '../controllers/conversation.control.js';



const router = express.Router();

router.post('/',verifyToken, createConversation);
router.get('/:id', verifyToken,getConversations );
router.get('/single/:id', verifyToken, getSingleConversation);
router.put('/:id', verifyToken, updateConversation);



export default router;