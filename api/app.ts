import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import routes from '#routes'

import type { Express } from 'express'

const corsOrigins = { origin: 'http://localhost:5173' }

const corsConfig = cors(corsOrigins)

const app: Express = express()

const port = process.env.PORT

app.use(corsConfig)

app.listen(port, () => console.log('connected to port'))

routes(app)
