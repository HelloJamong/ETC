#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int* p = &a;

    cout << "a: " << a << endl;
    cout << "*p: " << *p << endl;

    *p = 20;  // 포인터를 통해 a의 값을 변경
    cout << "a (after *p = 20): " << a << endl;

    return 0;
}