const ChargingStation = require('../src/ChargingStation')
const ScooterApp = require('../src/ScooterApp')
const User = require('../src/User')

describe('Scooter App Class', () => {
  const testScooterApp = new ScooterApp()

  test('App has users above 20', () => {
    const testUser = new User('Jin', 20, 30)
    const testUser2 = new User('John', 17, 30)
    testScooterApp.addUser(testUser)

    expect(testScooterApp.users[0].name).toContain('Jin')
    expect(testScooterApp.addUser(testUser2)).toBe(
      'Apologies, you are not old enough'
    )
  })

  test('App has charging Stations', () => {
    const testChargingStation = new ChargingStation('1st Street')
    testScooterApp.addChargingStation(testChargingStation)

    expect(testScooterApp.chargingStations).toContain(testChargingStation)
  })
})
