#include<iostream>
using namespace std;

// 3-1. Call by Value 함수
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    cout << "함수 내부 (Call by Value) - a: " << a << ", b: " << b << endl;
}

// 3-1. Call by Pointer 함수
void swapByPointer(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    cout << "함수 내부 (Call by Pointer) - a: " << *a << ", b: " << *b << endl;
}

// 3-2. 배열의 최대값을 찾는 함수
int findMax(int* arr, int size) {
    int max = *arr;  // 첫 번째 원소로 초기화
    for(int i = 1; i < size; i++) {
        if(*(arr + i) > max) {
            max = *(arr + i);
        }
    }
    return max;
}

// 4-2. 문자열 복사 함수
void myStrcpy(char* dest, const char* src) {
    while(*src != '\0') {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\0';  // null 문자 추가
}

int main(){
    /*
    1단계: 포인터 기초
    1. 포인터 선언과 출력
    - 정수형 변수를 하나 선언하고, 포인터를 이용해 해당 변수의 주소와 값을 출력하라.
    */
    int number = 10;
    int* ptr = &number;
    cout << "변수의 값: " << number << endl;
    cout << "변수의 주소: " << &number << endl;
    cout << "포인터가 가리키는 주소: " << ptr << endl;
    cout << "포인터를 통한 값 접근: " << *ptr << endl; 
    /*
    2. 포인터를 이용한 값 변경
    - 정수형 변수와 포인터를 선언한 뒤, 포인터를 통해 변수의 값을 변경하고 결과를 확인하라.
    */
    int value = 20;
    int* pValue = &value;
    cout << "\n변경 전 값: " << value << endl;
    *pValue = 50;  // 포인터를 통한 값 변경
    cout << "변경 후 값: " << value << endl;


    /*
    2단계: 포인터와 배열
    1. 배열 요소 접근
    - 크기 5 정수 배열을 만들고, 포인터 연산(*(ptr + i))을 이용해 배열의 모든 원소를 출력하라.
    */
    int arr[5] = {10, 20, 30, 40, 50};
    int* arrPtr = arr;
    cout << "\n배열 요소 출력 (포인터 연산): ";
    for(int i = 0; i < 5; i++) {
        cout << *(arrPtr + i) << " ";
    }
    cout << endl;


    /*
    2. 배열 합 구하기
    - 포인터를 사용하여 배열의 모든 원소의 합을 계산하는 프로그램을 작성하라.
    */
    int sum = 0;
    for(int i = 0; i < 5; i++) {
        sum += *(arrPtr + i);
    }
    cout << "배열의 합: " << sum << endl;


    /*
    3단계: 포인터와 함수
    1. Call by Value vs Call by Pointer
    - 두 정수를 입력받아 Call by Value 함수와 Call by Pointer 함수를 각각 이용해 두 값을 교환(swap)하는 프로그램을 작성하라.
    */
    int a = 10, b = 20;
    cout << "\n원래 값 - a: " << a << ", b: " << b << endl;

    // Call by Value 테스트
    swapByValue(a, b);
    cout << "함수 호출 후 (Call by Value) - a: " << a << ", b: " << b << endl;

    // Call by Pointer 테스트
    swapByPointer(&a, &b);
    cout << "함수 호출 후 (Call by Pointer) - a: " << a << ", b: " << b << endl;


    /*
    2. 배열을 함수 인자로 전달
    - 포인터를 함수 인자로 받아 배열의 최대값을 반환하는 함수를 작성하라.
    */
    int numbers[] = {15, 42, 8, 23, 67};
    int arraySize = 5;
    int maxValue = findMax(numbers, arraySize);
    cout << "\n배열의 최대값: " << maxValue << endl;


    /*
    4단계: 동적 메모리와 포인터 연산
    1. 동적 배열 생성 및 초기화
    - 사용자로부터 정수 n을 입력받아, new를 이용해 크기 n짜리 동적 배열을 만들고, 1부터 n까지 채운 뒤 출력하라.
    */
    int n;
    cout << "\n배열 크기 입력: ";
    cin >> n;

    int* dynamicArr = new int[n];  // 동적 배열 생성

    // 1부터 n까지 배열에 채우기
    for(int i = 0; i < n; i++) {
        *(dynamicArr + i) = i + 1;
    }

    // 배열 출력
    cout << "동적 배열 출력: ";
    for(int i = 0; i < n; i++) {
        cout << *(dynamicArr + i) << " ";
    }
    cout << endl;

    delete[] dynamicArr;  // 동적 메모리 해제


    /*
    2. 문자열 복사 함수 구현
    - 포인터를 사용하여 C 스타일 문자열 복사 함수를 직접 구현하라. (strcpy 함수와 같은 기능)
    */
    char source[] = "Hello, World!";
    char destination[50];

    cout << "\n원본 문자열: " << source << endl;
    myStrcpy(destination, source);
    cout << "복사된 문자열: " << destination << endl;

    return 0;
}