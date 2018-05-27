# online-min
Find mimimum processing values one by one (online algorithm)

## Usage

```
const Min = require('online-min')
const min = Min()

;[1,2,3,4,5].forEach(v => { min(v) })

console.log(min()) // -> 1

```
