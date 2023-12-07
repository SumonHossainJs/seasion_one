import express from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/user.control.js';
import { verifyToken } from '../middleware/jwt.js';



const router = express.Router();

router.get('/get/:id', getUser);
router.put("/update/:id",verifyToken,updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);


export default router;