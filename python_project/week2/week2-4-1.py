#1. 정수를 입력받아 양수면 "Positive"를 출력
number = input()
if number > 0:
    print("Postive")

#2. 정수를 입력 받아, 짝수면 "Even", 홀수면 "Odd"를 출력
num = input()
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

#3. 시험 점수 (0 ~ 100)를 입력 받아 다음과 같이 출력
#90점 이상 : A
#80점 이상 : B
#70점 이상 : C
#그 외 : F
score = input()

if score > 90:
    print("A")
elif score > 80:
    print("B")
elif score > 70:
    print("C")
else:
    print("F")

#4. 두 개의 정수를 입력받아, 두 수가 모두 짝수이면 "Both Even", 하나만 짝수이면 "One Even", 둘 다 홀수이면 "Both Odd"를 출력
num1 = input()
num2 = input()

if num1 % 2 == 0 and num2 % 2 == 0 :
    print("Both Even")
elif num1 % 2 == 0 or num2 % 2 == 0 :
    print("One Even")
else :
    print("Both Odd")


#5. 정수 3개를 입력 받아, 가장 큰 수를 출력하는 프로그램을 작성하여라
n1 = input()
n2 = input()
n3 = input()

max_num = n1
if n2 > max_num:
    max_num = n2
if n3 > max_num:
    max_num = n3

print(max_num)