module.exports = function () {
  var value = NaN
  var n = 0

  var min = function min (x) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      n += 1
      if ((x < value) || (isNaN(value))) {
        value = x
      }
    } else if (Array.isArray(x)) {
      x.forEach(el => min(el))
    }
    return value
  }

  min.fit = function (x) {
    min(x)
  }

  Object.defineProperty(min, 'value', {
    get: function () {
      return value
    }
  })

  Object.defineProperty(min, 'n', {
    get: function () {
      return n
    }
  })

  return min
}
