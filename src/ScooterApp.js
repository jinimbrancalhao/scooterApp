class ScooterApp {
  constructor() {
    this.users = []
    this.chargingStations = []
  }
  addUser(user) {
    if (user.age >= 18) {
      this.users.push(user)
    } else {
      return 'Apologies, you are not old enough'
    }
  }

  addChargingStation(chargingStation) {
    this.chargingStations.push(chargingStation)
  }
}

module.exports = ScooterApp
