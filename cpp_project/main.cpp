#include<iostream>
using namespace std;

void show_message(string msg = "Hi") {
    cout << msg << endl;
}

int main(){
	show_message();       // 출력: Hi
	show_message("Bye");  // 출력: Bye
	
	return 0;
}



