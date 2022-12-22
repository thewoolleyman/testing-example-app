import {describe, expect, test} from 'vitest'
import add from './adder'

describe('adder', () => {
  test('add', () => {
    expect(add(1,1)).toBe(2)
    expect(add(1,2)).toBe(3)
  })
})