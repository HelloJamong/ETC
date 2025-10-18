#include <iostream>
using namespace std;


void sum(int x, int y){
    cout << x + y << endl;
}

int maxValue(int a, int b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

void addFive(int x = 5){
    cout << x + 5 << endl;
}

void printValue(int x){
    cout << x << endl;
}

void printValue(string x){
    cout << x << endl;
}

int main(){
    //1. 함수 정의 및 호출
    //정수 두개를 매개 변수로 받아 합을 출력하는 sum 함수를 작성하고 호출해라
    int num1, num2;
    cin >> num1 >> num2;
    sum(num1, num2);

    //2. 반환값
    //매개 변수로 두개의 정수를 받아서, 최대값을 '반환' 하는 함수 maxValue를 작성하라.
    int num3, num4;
    cin >> num3 >> num4;
    cout << maxValue(num3, num4) << endl;

    //3. 기본값 매개변수
    //정수를 하나 입력받고, 매개 변수에 5를 더한 결과를 출력하는 addFive 함수를 작성하고 파라미터를 입력하지 않으면 5를 출력한다.
    int number;
    cin >> number;
    addFive(number);

    //5.오버로딩
    //같은 이름 printValue 함수로 파라미터로 정수 또는 문자열을 받는 함수를 각각 만드시오. 즉 정수를 출력하는 것과 문자열을 출력하는 것을 오버로딩하시오.
    printValue(10);
    printValue("Hello");

    return 0;

}
