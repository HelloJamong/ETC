#include <iostream>
using namespace std;

int main(){
    //1. 정수를 입력받아 양수면 "Positive"를 출력
    int number;
    cin >> number;
    if (number > 0){
        cout << "Positive" << endl;
    }

    //2. 정수를 입력 받아, 짝수면 "Even", 홀수면 "Odd"를 출력
    int num;
    cin >> num;
    if (num % 2 == 0){
        cout << "Even" << endl;
    }
    else{
        cout << "Odd" << endl;
    }


    //3. 시험 점수 (0 ~ 100)를 입력 받아 다음과 같이 출력
    /*
    90점 이상 : A
    80점 이상 : B
    70점 이상 : C
    그 외 : F
    */
   int score;
   cin >> score;
   if (score >= 90){
    cout << "A" << endl;
   }else if (score >= 80){
    cout << "B" << endl;
   }else if (score >=70){
    cout << "C" << endl;
   }else{
    cout << "F" << endl;
   }

    //4. 두 개의 정수를 입력받아, 두 수가 모두 짝수이면 "Both Even", 하나만 짝수이면 "One Even", 둘 다 홀수이면 "Both Odd"를 출력
    int num1, num2;
    cin >> num1 >> num2;
    if (num1 % 2 == 0 && num2 % 2 == 0){
        cout << "Both Even" << endl;
    }else if (num1 % 2 == 0 || num2 % 2 == 0){
        cout << "One Even" << endl;
    }else{
        cout << "Both Odd" << endl;
    }
}