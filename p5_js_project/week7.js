//1. 배열 요소 출력하기 for 문 사용
let arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//2. 배열의 합 구하기
let arr2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr2.length; i++){
    sum += arr2[i];
}
console.log("합계 : ", sum);

//3. 배열의 최대값 구하기
let arr3 = [12, 5, 8, 130, 44];
let max = arr3[0];

for (let i = 1; i < arr3.length; i++){
    if(arr[i] > max){
        max = arr3[i];
    }
}
console.log("최대값 : ", max);


//4. 배열에서 특정 값 찾기
let arr4 = [3, 6, 9, 12, 15];
let target = 9;
let found = false;

for (let i = 0; i < arr4.length; i++){
    if(arr4[i] === target){
        found = true;
        break;
    }
}

if(found){
    console.log("찾았다!");
}
else{
    console.log("없다!");
}

//5. 배열을 거꾸로 출력하기
let arr5 = [1, 2, 3, 4, 5];
for (let i = arr5.length - 1; i >= 0; i--){
    console.log(arr5[i]);
}

//6. 배열에서 짝수만 출력하기
let arr6 = [10, 15, 20, 25, 30];
for (let i = 0; i < arr6.length; i++){
    if(arr6[i] % 2 === 0){
        console.log(arr6[i]);
    }
}

//7. 배열 요소를 제곱하여 새로운 배열 만들기
let arr7 = [2, 3, 4];
let squaredArr = [];

for (let i = 0; i < arr7.length; i++){
    squaredArr[i] = arr7[i] * arr7[i];
}

console.log(squaredArr);

//8. 중복 제거하기
let arr8 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr8.length; i++){
    let isDuplicate = false;

    for(let j = 0; j < uniqueArr.length; j++){
        if(arr8[i] === uniqueArr[j]){
            isDuplicate = true;
            break;
        }
    }

    if(!isDuplicate){
        uniqueArr.push(arr8[i]);
    }
}