import {handler} from './register'
import {describe, it, expect} from 'vitest'

describe('testing register function', () => {
  describe('when successful', () => {
    it('returns hello + given email', async () => {
      // TODO: Shape of event argument and response must be correct for a netlify serverless event
      const expectedResponse = {
        statusCode: 200,
        body: 'Hello test.example.com!'
      }
      // TODO: discuss why we needed eql instead of eq
      expect(await handler({})).eql(expectedResponse)
    })
  })
  describe('when failing', () => {
    it.skip('handles error')
  })
})