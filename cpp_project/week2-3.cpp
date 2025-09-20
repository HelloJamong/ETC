#include <iostream>
using namespace std;

int main(){
    /*
    1. 두 변수 name과 age를 받아 My name is [name] and I am [age] years old.를 출력하는 코드를 작성하라.
    */
   string name = "안용욱";
   int age = 26;

   cout << "My name is " << name << " and I am " << age << " years old." << endl;


    /*
    2. 변수 a = 5와 b = 3를 선언하고 a + b = 8 형식으로 출력하는 코드를 작성하라.
    */
   int a = 5;
   int b = 3;
   cout << "a + b = " << a + b << endl;

    /*
    3. 사용자로부터 이름을 입력받아 "Welcome, [name]!"을 출력하는 코드를 작성하라.
   */
    string user_name;
    cout << "이름 입력 : ";
    cin >> user_name;
    cout << "Welcome, " << user_name << "!" << endl;
}