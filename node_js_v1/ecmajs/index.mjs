// import { num, add, sub } from './calc.mjs';
import * as calc from './calc.mjs';

// default export된 함수는 호출하는 측에서 이름을 자유롭게 붙일 수 있습니다.
// 다만 export를 사용하는 것이 유지보수 및 디버깅 측면에서 좋습니다.
import defaultCalc from './calc.mjs';

console.log(calc.num);

let res = calc.add(3, 1);
console.log(res);

res = calc.sub(3, 1)
console.log(res);

