import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('o usuario consegue criar uma nova transacao', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 5000,
    type: 'credit',
  })

  expect(response.statusCode).toEqual(201)
})
