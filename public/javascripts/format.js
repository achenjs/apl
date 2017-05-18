class init {
  constructor (str) {
    this.str = str
  }
  formatDate () {
    var newTime = new Date(this.str)
    var year = newTime.getFullYear()
    var month = newTime.getMonth() + 1
    var date = newTime.getDate()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    return year + '-' + month + '-' + date
  }
}
