import express from 'express';
import { register } from '../controllers/auth.control.js';


const router = express.Router();

router.post("/register", register);


export default router;