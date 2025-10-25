#include<iostream>
using namespace std;

int main(){
    /*C++의 고정 크기 배열*/
    //배열 선언 및 초기화
    int nums[3] = {10, 20, 30};

    //요소 변경
    nums[2] = 40;

    //요소 접근 및 출력
    cout << nums[2] << endl;

    //전체 출력 (반복문 사용)
    for(int i = 0; i < 3; i++){
        cout << nums[i] << " ";
    }
    cout << endl;

    /*C++의 vector*/
    vector<int> numbers = {10, 20, 30};

    //  벡터의 크기
    cout << "크기(size): " << numbers.size() << endl;


    // 모든 원소 출력
    cout << "\n for 문으로 현재 벡터의 원소들: ";
    for (int i = 0; i < numbers.size(); i++)
      cout << numbers[i] << " "; //모든 값 출력
    
    
    // 모든 원소 출력
    cout << "\n range-based for 문으로 현재 벡터의 원소들: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    // 원소 추가 (push_back)
    numbers.push_back(40);
    numbers.push_back(50);
    

    // 원소 접근
    cout << "세 번째 원소 (index 2): " << numbers[2] << endl;
    cout << "첫 번째 원소 (front): " << numbers.front() << endl;
    cout << "마지막 원소 (back): " << numbers.back() << endl;
  

    // 원소 삭제 (pop_back)
    numbers.pop_back(); // 마지막 원소 제거
    cout << "\npop_back() 이후 벡터: ";
    for (int n : numbers) cout << n << " ";
    cout << endl;

    // 벡터 비우기 (clear)
    numbers.clear();
    cout << "clear() 이후 크기: " << numbers.size() << endl;
    
    // 동적 크기 조정 (resize)
    
    numbers.resize(3); // 3개의 원소로 늘리고 defalut 값으로 초기화
    cout << "\nresize 후 벡터: ";
    for (int n : numbers) cout << n << " ";
    cout << endl;
    
    numbers.resize(6, 100); // 3개의 원소로 늘려서 부족한 부분을 100으로 채움
    cout << "\nresize 후 벡터: ";
    for (int n : numbers) cout << n << " ";
    cout << endl;

    return 0;
}