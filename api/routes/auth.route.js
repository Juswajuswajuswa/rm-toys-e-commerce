import express from 'express'
import { getMe, refreshToken, signIn, signOut, signUp } from '../controllers/auth.controller.js'

const router = express.Router()

router.post(`/signUp`, signUp)
router.post(`/signIn`, signIn)
router.post(`/signOut`, signOut)
// refresh token
router.post(`/refresh-token`, refreshToken)
router.get(`/getMe`, getMe)

export default router