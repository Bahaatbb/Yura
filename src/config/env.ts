// Contents of src/config.ts

import { config as configDotenv } from 'dotenv'
import { resolve } from 'path'
import process from 'process'

let env = 'test'

process.argv.forEach(val => {
  env = val
})

switch (env) {
  case 'development':
    configDotenv({
      path: resolve(__dirname, '../../.env.development')
    })
    break
  case 'staging':
    configDotenv({
      path: resolve(__dirname, '../../.env.staging')
    })
    break
  case 'testing':
    configDotenv({
      path: resolve(__dirname, '../../.env.test')
    })
    break
  case 'production':
    configDotenv({
      path: resolve(__dirname, '../../.env.production')
    })
    break
  // Add 'staging' and 'production' cases here as well!
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}
