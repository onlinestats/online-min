var test = require('tape')
var Min = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 4]

test('Simple test with NaN and Strings', (_) => {
  var min = Min()
  values.forEach(v => { min(v) })
  console.log(min())
  _.equal(min(), 1)
  _.end()
})

test('No numerical values', (_) => {
  var min = Min()
  min('WTF')
  var m = min()
  _.true(m !== m) // Fastes NaN check. Linter, shut the fuck up!
  _.end()
})

test('Only one value', (_) => {
  var min = Min()
  min(42)
  _.equal(min(), 42)
  _.end()
})
