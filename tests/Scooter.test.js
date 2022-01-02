const Scooter = require('../src/Scooter')

describe('Scooter Class', () => {
  const testScooter = new Scooter(25, true)

  test('Scooter can have range', () => {
    expect(testScooter.range).toBe(25)
  })

  test('Scooter can be broken', () => {
    expect(testScooter.broken).toBe(true)
  })
})
