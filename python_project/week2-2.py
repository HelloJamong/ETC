#1. int, double, char 타입 변수를 각각 선언하고, 초기값을 넣어 출력하는 코드를 작성하라
integer_number = 10
double_number = 20.5
character = 'A'

print("정수 : ", integer_number)
print("실수 : ", double_number)
print("문자 : ", character)


#2. 변수 a = "10"과 b = 5를 선언하고 a + b를 실행했을 때 오류가 나는 이유를 설명하고, 오류 없이 숫자 덧셈을 하는 코드를 작성하라.
#a = "10" ""로 묶으면 문자열임
a = 10
b = 5
print(a+b)

#3. 변수 c에 문자 'A'를 저장하고, 해당 문자의 ASCII 값을 출력하는 코드를 작성하라.
c = 'A'
print("ASCII 값 : ", ord(c))