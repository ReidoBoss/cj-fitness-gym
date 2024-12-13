import type { Request, Response } from 'express'

function index(req: Request, res: Response) {
  res.send({
    message: 'connected'
  })
}

export default {
  index
}
