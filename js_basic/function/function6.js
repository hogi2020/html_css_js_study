// 생성자 함수가 있다.
/*
함수의 종류
1. 선언적 함수 : 이름을 붙여서 정의해 놓은 상태
- 자바스크립트 파일을 읽을 때, 선언적 함수를 우선적으로 읽어줌
- 호출 위치가 자유롭다.

2. 익명 함수 : 함수의 이름이 없이 정의하는 형태
- 익명함수 자체로는 호출이 불가
- 변수에 함수를 대입하거나 특정 이벤트 객체에 대입하는 식으로 호출이 가능함

3. 대입형 함수 : 변수에 익명 함수가 대입된 형태
4. 즉시 실행함수 : 함수가 자기자신을 정의하자마자 바로 자신을 호출함.
*/

function Counter() {
    this.sum = 0
    this.count = 0
}

const obj = new Counter()
console.log(obj.count)
console.log(obj.sum)

obj.sum += 1

console.log(obj.sum)

