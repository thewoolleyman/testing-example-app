import {handler} from './register'
import {describe, it} from 'vitest'
describe('testing register function', () => {
  it('returns hello + given name', async () => {
    handler()
  })
})