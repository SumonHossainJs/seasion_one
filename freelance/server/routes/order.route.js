import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { confromOrders, getOrders, intent } from '../controllers/order.control.js';



const router = express.Router();

router.get('/', verifyToken, getOrders);
router.post('/create-payment-intent/:id', verifyToken,intent);
router.put('/',verifyToken,confromOrders);




export default router;