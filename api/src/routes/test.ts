import { Router } from 'express'

const router: Router = Router()

router.get('/', (_req, res) => res.status(200).json({ message: 'Hello Yura!' }))

export default router
