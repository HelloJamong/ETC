#include <iostream>
using namespace std;
//포인터 선언과 사용
/*
int main() {
    int a = 5;
    int* p = &a;

    cout << "a: " << a << endl;
    cout << "*p: " << *p << endl;

    *p = 20;  // 포인터를 통해 a의 값을 변경
    cout << "a (after *p = 20): " << a << endl;

    return 0;
}
*/

//포인터와 함수(함수 인자 전달 방식)
void change(int x){
    x = 100;
}

int main(){
    int a= 5;
    change(a);
    cout << a << endl;
    return 0;
}