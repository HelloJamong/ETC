#include <iostream>
using namespace std;

int main(){
    /*
    1. int, double, char 타입 변수를 각각 선언하고, 초기값을 넣어 출력하는 코드를 작성하라
    */
   int integer_number= 10;
   double double_number = 20.5;
   char char_value = 'A';

   cout << "정수: " << integer_number << endl;
   cout << "실수: " << double_number << endl;
   cout << "문자: " << char_value << endl;

   /*
   2. 변수 a = "10"과 b = 5를 선언하고 a + b를 실행했을 때 오류가 나는 이유를 설명하고, 오류 없이 숫자 덧셈을 하는 코드를 작성하라.
   */
    //int a = "10"; 큰따옴표로 감싸면 문자열로 인식되서 int 타입에 맞지 않음
    int a = 10;
    int b = 5;
    cout << "a + b = " << a + b << endl;

    /*
    3. 변수 c에 문자 'A'를 저장하고, 해당 문자의 ASCII 값을 출력하는 코드를 작성하라.
    */
    char c = 'A';
    cout << "변수 C의 ASCII 값 : " << static_cast<int>(c) << endl;


   return 0;
}