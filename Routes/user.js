import express from 'express'
import { login, register, users ,profile} from '../Controllers/user.js';
import { Authenticated } from '../Middlewares/auth.js';
const router=express.Router();

router.post('/register',register)

router.post('/login',login)

router.get('/all',users)

router.get('/profile',Authenticated,profile)

export default router