import {handler} from './register'
import {describe, it, expect} from 'vitest'

describe('testing register function', () => {
  describe('when successful', () => {
    it('returns hello + given email', async () => {
      const name = 'robot'
      // TODO: Shape of event argument and response must be correct for a netlify serverless event
      const expectedResponse = {
        statusCode: 200,
        body: `Hello ${name}`
      }
      // TODO: discuss why we needed eql instead of eq
      const event = {name: name}
      const actualResponse = await handler(event);
      expect(actualResponse.body).eql(expectedResponse.body)
    })
  })
  describe('when failing', () => {
    it.skip('handles error')
  })
})