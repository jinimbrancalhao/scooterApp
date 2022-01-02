const User = require('../src/User')

describe('User Class', () => {
  const testUser = new User('Jin', 20, 30)

  test('User has a name', () => {
    expect(testUser.name).toBe('Jin')
  })

  test('User has an age', () => {
    expect(testUser.age).toBe(20)
  })

  test('User can download Scooter App', () => {
    expect(testUser.downloadApp()).toBe('App finished downloading')
    expect(testUser.appDownload).toBe(true)
  })

  test('User has money', () => {
    expect(testUser.wallet).toBe(30)
  })
})
