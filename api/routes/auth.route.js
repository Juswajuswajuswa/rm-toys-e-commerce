import express from 'express'
import { getMe, refreshToken, signin, signout, signup } from '../controllers/auth.controller.js'

const router = express.Router()

router.post(`/signup`, signup)
router.post(`/signin`, signin)
router.post(`/signout`, signout)
// refresh token
router.post(`/refresh-token`, refreshToken)
router.get(`/getMe`, getMe)

export default router