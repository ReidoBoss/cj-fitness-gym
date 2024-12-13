import type { Express } from 'express'
import healthCheckController from 'controller/healthcheck-controller'

export default (app: Express) => {
  app.get('/', healthCheckController.index)
}
