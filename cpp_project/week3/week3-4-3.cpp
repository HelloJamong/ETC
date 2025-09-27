#include <iostream>
using namespace std;

int main(){
    //1. 1부터 10까지 숫자를 출력하는 반복문을 작성하시오.
    int num = 1;
    while(num <= 10){
        cout << num << endl;
        num++;
    }

    //2. 하나의 숫자를 입력받고, 1부터 입력받은 정수까지의 합을 구하는 프로그램을 작성하시오.
    int number;
    int sum = 0;
    cin >> number;
    for(int i = 1; i <= number; i++){
        sum += i;
    }
    cout << sum << endl;


    //3. 1부터 100까지 숫자 중 3의 배수만 출력하는 프로그램을 작성하시오.
    for(int j = 0; j <= 100; j++){
        if(j % 3 == 0){
            cout << j << endl;
        }
    }

    //4. 사용자가 0을 입력할 때까지 정수를 계속 입력받고, 입력한 수들의 평균을 구하는 프로그램을 작성하시오.
    int input_num;
    int result = 0;
    while(true){
        cin >> input_num;
        if(input_num == 0){
            break;
        }
        else{
            result += input_num;
        }
    }
    cout << result << endl;

    return 0;
}