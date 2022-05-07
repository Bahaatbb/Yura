import router from './test'
import request from 'supertest'

import { StatusCodes } from 'http-status-codes'

describe('Router', () => {
  it('should be defined', () => {
    expect(router).toBeDefined()
  })
  it('should have a get method', () => {
    expect(router.get).toBeDefined()
  })
  it('return 200 on / and a Hello Yura', () => {
    request(router)
      .get('/')
      .set('Accept', 'application/json')
      .expect(StatusCodes.OK)
      .then(res => {
        expect(res.body.message).toBe('Hello Yura')
      })
  })
})
