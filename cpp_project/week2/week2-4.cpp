#include <iostream>
using namespace std;

int main(){
    /*
    문자열 "456"을 int로 변환해 출력하는 방법을 코드로 작성하라. 
    */
    string number = "456";
    cout << "문자열 456을 숫자로 출력 : " << stoi(number) << endl;

    /*
    int 변수와 double 변수를 더할 때 어떤 일이 일어나는지 간단히 설명하고, 예제 코드를 작성하라.
    */
   //둘을 더하면 double 타입으로 변환되어 실수형으로 계산된다
   int int_num = 10;
   double double_num = 10.5;
   cout << "int 변수(int_num)와 double 변수(double_num)의 합 : " << int_num + double_num << endl;
}