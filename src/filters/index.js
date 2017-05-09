export function dateFormat (format, value) {
  const timer = new Date(value)
  const formats = format
  timer.setTime(timer.getTime() + 0)
  var y = timer.getUTCFullYear()
  var m = timer.getUTCMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = timer.getUTCDate()
  d = d < 10 ? ('0' + d) : d
  var h = timer.getUTCHours()
  var minute = timer.getUTCMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  var s = timer.getUTCSeconds()
  var time = y + "-" + m + "-" + d
  var times = y + "-" + m + "-" + d + ' ' + h + ':' + minute + ':' + s
  switch (formats) {
    case 'Y-M-D':
      return time
      break;
    case 'Y-M-D h-m-s':
      return times
      break;
    default:
      return time
      break;
  }
}
