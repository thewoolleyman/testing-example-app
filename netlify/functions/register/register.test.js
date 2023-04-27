import {handler} from './register'
import {describe, expect, it} from 'vitest'

describe('testing register function', () => {
  describe('when successful', () => {
    it('returns hello + given name as body property in the response', async () => {
      const name = 'robot'
      const event = {name: name}
      const actualResponse = await handler(event);
      expect(actualResponse.body).eql(`Hello ${name}`)
    })
    
    it('returns 200 as the statusCode property in the response', async () => {
      const event = {};
      const actualResponse = await handler(event);
      expect(actualResponse.statusCode).eql(200)
    })
  })
  describe('when failing', () => {
    it.skip('handles error')
  })
})