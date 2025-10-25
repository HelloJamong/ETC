#include<iostream>
#include<string>
#include<ctype.h>
#include<algorithm>
using namespace std;

int main(){
    /*
    문제 1(기초)
    대소문자 변환
    입력 : 문자열 1개
    출력 : 모든 소문자를 대문자로, 대문자를 소문자로 변환한 문자열 출력
    */
    string content;
    cin >> content;

    for(int i = 0; i < content.length(); i++){
        if(isupper(content[i])){
            cout << (char)tolower(content[i]);
        }
        else if(islower(content[i])){
            cout << (char)toupper(content[i]);
        }else{
            cout << content[i];
        }
    }
    cout << endl;

    /*
    문제 2(기초)
    문자열 비교
    입력 : 문자열 2개
    출력 : 같으면 "Equal", 사전순으로 앞서면 "First", 뒤면 "Second"
    */
    string str1, str2;
    cin >> str1 >> str2;

    if(str1 == str2){
        cout << "Equal" << endl;
    }else if(str1 < str2){
        cout << "First" << endl;
    }else{
        cout << "Second" << endl;
    }

    /*
    문제 3(중간)
    특정 단어 치환
    입력 : 문자열 1개, 바꿀 대상 단어, 새 단어
    출력 : 모든 대상 단어를 새 단어로 바꾼 결과
    */
    string text, oldWord, newWord;
    cin >> text >> oldWord >> newWord;

    int pos = 0;
    while((pos = text.find(oldWord, pos)) != string::npos){
        text.replace(pos, oldWord.length(), newWord);
        pos += newWord.length();
    }

    cout << text << endl;

    /*
    문제 4(중간/심화)
    회문(Palindrome) 판별
    입력 : 문자열 1개
    출력 : 회문이면 'YES' 아니면 'NO'
    */
    string palindrome;
    cin >> palindrome;

    string reversed = palindrome;
    reverse(reversed.begin(), reversed.end());

    if(palindrome == reversed){
        cout << "YES" << endl;
    }else{
        cout << "NO" << endl;
    }

    return 0;
}