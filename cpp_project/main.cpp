#include <iostream>
#include <vector>
using namespace std;


void increment(int &x){
	x += 1;
}

void printVector(const vector<int>& v){
	for(int x : v) cout << x << " ";
	cout << endl;

}

void divide(int a, int b, int &quotient, int &remainder){
	quotient = a / b;
	remainder = a % b;
}

int main(){
	int value = 10;
	increment(value);
	cout << value << endl;

	vector<int> data = {1, 2, 3, 4, 5};
	printVector(data);

	int q, r;
	divide(17, 5, q, r);
	cout << "몫 : " << q << ", 나머지 : " << r << endl;

	return 0;
}



