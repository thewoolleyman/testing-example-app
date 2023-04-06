import {handler} from './register'
import {describe, it, expect} from 'vitest'
describe('testing register function', () => {
  it('returns hello + given email', async () => {
    // TODO: Shape of event argument and response must be correct for a netlify serverless event 
    expect(await handler({})).eq('Hello test.example.com!')
  })
})