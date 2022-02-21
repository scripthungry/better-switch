// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Typescript errors turned off to test js runtime checks

import betterSwitch from '../index'

test('should throw an error because of a nonexistent key and no default key is provided', () => {
  expect(() => {
    betterSwitch('none existent key', {
      test: () => 'test',
    })
  }).toThrowError('BetterSwitch: \'none existent key\' is not a key in your caseObject parameter, and no \'default\' key is provided')
})

test('should throw an error because of a nonexistent key and default key does return a function', () => {
  expect(() => {
    betterSwitch('none existent key', {
      test: 'test',
      default: 'default',
    })
  }).toThrowError('BetterSwitch: The \'none existent key\' key in your caseObject parameter does not exist, and the \'default\' key does not return a function')
})

test('should throw an error because matched key does not return a function', () => {
  expect(() => {
    betterSwitch('test', {
      test: 'test',
      default: 'default',
    })
  }).toThrowError('BetterSwitch: The \'test\' key in your caseObject parameter does not return a function')
})

test('should throw an error because the second parameter is not an object', () => {
  expect(() => {
    betterSwitch('test', 'test')
  }).toThrowError('Cannot use \'in\' operator to search for \'test\' in test')
})

test('should throw an error because the second parameter is omitted', () => {
  expect(() => {
    betterSwitch('test')
  }).toThrowError('Cannot use \'in\' operator to search for \'test\' in undefined')
})

test('should throw an error because both parameters are omitted', () => {
  expect(() => {
    betterSwitch()
  }).toThrowError('Cannot use \'in\' operator to search for \'undefined\' in undefined')
})