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
  })
})