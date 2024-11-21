const calc = require('./calc.js')

// 1초 후 calc.num을 바꿔쓴다.
setTimeout(() => {
    calc.num = 10;
}, 1000)