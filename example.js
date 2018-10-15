const Min = require('.')

// Direct call
const min1 = Min()
;[1,2,3,4,5].forEach(v => { min1(v) })
console.log(min1()) // -> 1

// Or via .fit() and .value getter
const min2 = Min()
;[1,2,3,4,5].forEach(v => { min2.fit(v) })
console.log(min2.value) // -> 1

// You can also pass arays to min
min2([6, 7, 8])
// Keep in mind - we already declared min2, so we just update it
// Minimum is still 1
console.log(min2.value) // -> 1!
