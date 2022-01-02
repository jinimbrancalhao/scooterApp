class ChargingStation {
  constructor(location) {
    this.location = location
    this.availableScooters = []
    this.chargingScooters = []
    this.brokenScooters = []
    this.rentedScooters = []
  }

  addScooter(scooter) {
    this.availableScooters.push(scooter)
  }

  rentScooter(user) {
    if (user.wallet < 2) {
      return 'Sorry you do not have enough funds'
    } else {
      this.rentedScooters.push(
        this.availableScooters[this.availableScooters.length - 1]
      )
      this.availableScooters.pop()
    }
  }

  async returnScooter(scooter, user) {
    console.log(user.wallet)
    user.wallet += -2
    console.log(user.wallet)
    if (scooter.broken === true) {
      await this.fix(scooter)
    } else if (scooter.range < 32) {
      await this.charge(scooter)
    } else {
      this.availableScooters.push(scooter)
    }
  }

  async charge(scooter) {
    console.log('Starting charge')
    this.chargingScooters.push(scooter)

    await new Promise((resolve) => setTimeout(resolve, 2000)) // wait 2 seconds

    console.log('Charge complete')
    this.chargingScooters.pop()
    scooter.range = 32
    this.availableScooters.push(scooter)
  }

  async fix(scooter) {
    console.log('Starting fix')
    this.brokenScooters.push(scooter)

    await new Promise((resolve) => setTimeout(resolve, 2000)) // wait 2 seconds

    console.log('Fix complete')
    this.brokenScooters.pop()
    scooter.broken = false
    this.availableScooters.push(scooter)
  }
}

module.exports = ChargingStation
