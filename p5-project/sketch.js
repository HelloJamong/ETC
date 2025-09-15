let userInput = prompt("숫자를 입력하세요:");
let number = parseInt(userInput);

// 위의 코드를 아래와 같이 줄일수 있다
// let number = parseInt(prompt("숫자를 입력하세요"));
// 수학 시간에 아래와 같은 수식에서, 
// 가장 깊이 있는 괄호를 먼저 계산하는 것과 동일한 작동 순서이다.
// (1 - (2 + 3) )


// 아래는 if 조건문이다. 
// 아직 배우지는 않은 내용인데, 향후에 다시 돌아와서 보자.
// isNaN( ) 함수는 매개변수가 숫자인지를 확인하는 함수이다(숫자가 아니면 true를 반환한다).
// NaN은 Not a Number라는 의미.
if (isNaN(number)) {
  console.log("유효한 숫자가 아닙니다.");
} else {
  console.log("입력한 숫자: " + number);
}