const ChargingStation = require('../src/ChargingStation')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('Charging Station Class', () => {
  const testChargingStation = new ChargingStation('1st Street')
  const testUser = new User('Jin', 20, 30)

  test('Add scooter', () => {
    const testScooter = new Scooter(32, false)

    testChargingStation.addScooter(testScooter)
    expect(testChargingStation.availableScooters).toContain(testScooter)
  })

  test('Station has location', () => {
    expect(testChargingStation.location).toBe('1st Street')
  })

  test('Station has scooters', () => {
    const testScooter = new Scooter(32, false)
    testChargingStation.returnScooter(testScooter, testUser)

    expect(testChargingStation.availableScooters).toContain(testScooter)
  })

  test('Rent scooter', () => {
    testChargingStation.rentScooter(testUser)
    const testScooter = new Scooter(32, false)

    expect(testChargingStation.rentedScooters).toContainEqual(testScooter)
  })

  test('Return Scooter', () => {
    const testScooter = new Scooter(30, false)
    const testUser = new User('John', 25, 20)
    testChargingStation.returnScooter(testScooter, testUser)

    expect(testUser.wallet).toBe(18)
  })

  test('Charge scooter', async () => {
    const testScooter = new Scooter(25, false)
    await testChargingStation.returnScooter(testScooter, testUser) // we need to wait for the charge!
    console.log('Test complete')
  })

  test('Fix scooter', async () => {
    const testScooter2 = new Scooter(32, true)
    await testChargingStation.returnScooter(testScooter2, testUser) // we need to wait for the fix!
    console.log('Test complete')
  })
})
