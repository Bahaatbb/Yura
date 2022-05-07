import express, { Application } from 'express'
import { config } from 'dotenv'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import testRoutes from './routes/test'

config()

const app: Application = express()

app.use('/test', testRoutes)
app.use(helmet())
app.use(cors({ origin: '*' }))
app.use(logger('dev'))

const PORT: string = process.env.PORT || '4000'

app.get('/', (_req, res) => res.send('Hello world!'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
