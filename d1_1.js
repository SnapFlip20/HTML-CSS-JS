/* 자바스크립트의 기본 문법 */

/* 1. var */
var num, _num, num_num, num12, num_123, $num; // 사용 가능한 변수 이름 예시(while 같은 keyword는 당연히 쓰면 안 된다)
var num = 10, str = "Hello World"; // 선언과 동시에 값 대입 가능, 값을 대입하지 않으면 undefined가 저장된다
function f() {var num = 10;} // 함수 내에서 var로 선언했을 때 한정으로 local variance가 된다
MOD = 1000000007; // var를 사용하지 않아도 된다
num = null; // 변수 초기화
// var 사용 시 발생하는 hoisting issue, let/const의 출현(ES6~)으로 인해 var는 사용하지 않는 것이 추천됨

/* 2. let, const(둘 다 ES6부터 사용 가능)*/
let num; // 선언된 block 내에서만 사용 가능, block 밖에서는 같은 이름의 변수를 사용할 수 없다. 중복 선언 불가능
const MAX = 1000000; // 상수 선언(값 재할당 불가능), 선언과 동시에 초기화를 해야 한다. 이것도 중복 선언 불가능

/* 3. 자료형 */
let num = 100; // Number Type
let str = "Wow"; // String Type
let isP = true; // Boolean Type
let lst = [1, 2, 3, 4]; // Array Type(length, push, pop, unshift, shift, indexOf 연산 가능)
let dic = {'A':'a', 'B':2}; // Object Type
let sym = Symbol("Immutable object") // Symbol Type(유일한 객체)

let a = 1, b = 1, c;
/* 4. 산술 연산자 */
c = a + b; // add(+는 두 개 이상의 문자열을 연결하는 용도로도 사용 가능)
c = a - b; // sub
c = a * b; // mul
c = a / b; // floordiv
c = a % b; // mod
a++; // increment operator
b--; // decrement operator
// 증감 연산자는 prefix/postfix 모두 가능하다
b += a;
b -= a;
b *= a;
b /= a;
b %= a;

/* 5. 비교 연산자 */
a == b;
a === b;
a != b;
a !== b;
a < b;
a <= b;
a > b;
a >= b;

/* 6. 조건문 */
// if
if (a === 1) {
    alert('true');
}
// if ~ else
if (a === 1) {
    alert('true');
} else {
    alert('false');
}
// ternary
(a === 1) ? alert('true') : alert('false');
// switch ~ case
switch (a)
{
    case 1: alert('true')
        break;
    case 2: alert('false')
        break;
    default: alert('omg');
}

/* 7. 반복문 */
// for
let i, sum = 0;
for (i = 1; i < 11; i++) {
    if (i === 5) continue;
    sum += i;
}
// while
while (--i) {
    sum += i;
    if (i === 2) break;
}