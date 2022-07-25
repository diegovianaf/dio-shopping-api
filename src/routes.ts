import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Welcome to the DIO Shopping API' })
})

export { router }
