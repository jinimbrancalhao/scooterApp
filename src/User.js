class User {
  constructor(name, age, wallet) {
    this.name = name
    this.age = age
    this.appDownload = false
    this.wallet = wallet
  }
  downloadApp() {
    this.appDownload = true
    return 'App finished downloading'
  }
}

module.exports = User
