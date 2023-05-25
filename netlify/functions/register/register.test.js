import {handler} from './register'
import {describe, expect, it} from 'vitest'

describe('testing register handler function', () => {
  describe('when successful', () => {
    it('returns hello + given name as body property in the response', async () => {
      const name = 'robot'
      const event = {queryStringParameters: {name: name}}
      const actualResponse = await handler(event);
      expect(actualResponse.body).eql(`Hello ${name}`)
    })

    it('returns 200 as the statusCode property in the response', async () => {
      const event = {queryStringParameters: {name: 'blah'}};
      const actualResponse = await handler(event);
      expect(actualResponse.statusCode).eql(200)
    })
  })

  describe('when failing', () => {
    describe('when name is not provided', () => {
      it('returns 400 as the statusCode property in the response', async () => {
        const event = {queryStringParameters:{}}
        const actualResponse = await handler(event);
        expect(actualResponse.statusCode).eql(400)
      })

      it('returns "Name is required" in the response', async () => {
        const event = {queryStringParameters: {}}
        const actualResponse = await handler(event);
        expect(actualResponse.body).eql('Name is required')
      })
    })
    
    describe('when an exception is thrown', () => {
      it('return 500 as the statusCode property in the response', async () => {
        // In reality, Netlify will always provide queryStringParameters, but we're omitting for
        // testing purposes, so we could test-drive the exception handling. But it's not
        // currently possible to simulate this exception with a test double.
        const event = {}
        const actualResponse = await handler(event)
        expect(actualResponse.statusCode).eql(500)
      })
      
      it('returns the error message in the body', async () => {
        const event = {}
        const actualResponse = await handler(event)
        expect(actualResponse.body).eql("TypeError: Cannot read properties of undefined (reading 'name')")
      })
    })
  })
})