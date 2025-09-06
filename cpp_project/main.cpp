// C++

#include<iostream>
using namespace std;
int main(){
	// 두 수의 합을 구하는 코드
	int X=10;
	int Y=20;
	int Z;
	Z = X + Y;
	cout << "결과: "<< Z <<"\n";
	
	
	// 0 부터 4까지 숫자 중 짝수와 홀수 출력
	for(int i = 0; i < 5; i++){
		if( i % 2 == 0){
			cout << i << "는 짝수\n";
		} else {
			cout << i << "는 홀수\n";
		}
	}
	
	// 두 수 중 더 큰 값 출력
	int a = 100, b = 200;
	int c;
	c = a > b ? a : b;
	cout << "더 큰 값: " << c << endl;

	return 0;
}