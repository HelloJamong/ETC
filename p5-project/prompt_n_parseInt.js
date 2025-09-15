let userInput = prompt("숫자를 입력하세요:");
let number = parseInt(userInput);

// 입력이 유효한 숫자인지 확인

if (isNaN(number)) {
  console.log("유효한 숫자가 아닙니다.");
} else {
  console.log("입력한 숫자: " + number);
}