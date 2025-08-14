// @ts-check
import { test, expect } from '@jest/globals'
import solution from '../src/solution.js'

test('regex matches ruby1.js', () => {
  expect('ruby1.js').toMatch(solution)
  expect('ruby2.js').not.toMatch(solution)
})
