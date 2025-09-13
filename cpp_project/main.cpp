#include<iostream>
#include "math_utils.h"
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
using namespace std;

int main(){
	double r = 5.0;
	cout << "원의 넓이 : " << PI * SQUARE(r) << endl;


	/*
	헤더를 사용한 함수 호출
	std::cout << add(3, 4) << std::endl;
	
	문자 입력 및 출력
	std::string txt;
	std::cin >> txt;
	std::cout << txt << std::endl;
	std::cout << "Hello, World!" << std::endl;
	*/
	return 0;
}