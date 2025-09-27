#include <iostream>
using namespace std;

int main(){
    // 1. 세 수가 모두 같은지 확인 모두 같으면 "All same", 두개만 같으면 "Two same", 모두 다르면 "All different"
    int num1, num2, num3;
    cin >> num1 >> num2 >> num3;
    if(num1 == num2 && num2 == num3){
        cout << "All same" << endl;
    }else if(num1 == num2 || num1 == num3 || num2 == num3){
        cout << "Two same" << endl;
    }else{
        cout << "All different" << endl;
    }

    // 2. 문자로 판별: 알파벳인지 아닌지
    char text;
    cin >> text;
    if(text >= 'a' && text <= 'z' || text >= 'A' && text <= 'Z'){
        cout << "Alphabet" << endl;
    }else if(text >= '0' && text <= '9'){
        cout << "Digit" << endl;
    }else{
        cout << "Other" << endl;
    }

    // 3. 정수 3개를 오름차순 정렬하여 출력
    int n1, n2, n3, temp;
    cin >> n1 >> n2 >> n3;
    if (n1 > n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
    }
    
    if (n2 > n3) {
        temp = n2;
        n2 = n3;
        n3 = temp;
    }

    if (n1 > n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
    }

    cout << n1 << ", " << n2 << ", " << n3 << endl;

    // 4. 로그인 시도 시 계정 확인
    string account, passwd;

    cin >> account >> passwd;
    
    if(account == "admin" && passwd == "1234"){
        cout << "Login Success" << endl;
    }else if(account == "admin" && passwd != "1234"){
        cout << "Wrong Password" << endl;
    }else{
        cout << "No such user" << endl;
    }
}