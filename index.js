module.exports = function () {
  var min = NaN
  return function (x) {
    var value
    if (!isNaN(x)) {
      value = (typeof x === 'number') ? x : parseFloat(x)
      if ((value < min) || (isNaN(min))) {
        min = value
      }
    }
    return min
  }
}
