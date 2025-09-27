#1. 1부터 10까지 숫자를 출력하는 반복문을 작성하시오.
for i in range(1,11):
    print(i)

#2. 하나의 숫자를 입력받고, 1부터 입력받은 정수까지의 합을 구하는 프로그램을 작성하시오.
number = input()
sum = 0
for i in range(1,int(number)+1):
    sum += i
print(sum)

#3. 1부터 100까지 숫자 중 3의 배수만 출력하는 프로그램을 작성하시오.
for i in range(1,101):
    if i % 3 == 0:
        print(i)

#4. 사용자가 0을 입력할 때까지 정수를 계속 입력받고, 입력한 수들의 평균을 구하는 프로그램을 작성하시오.
result = 0
while(true):
    number = input()
    if number == 0:
        break
    else:
        result += number
print(result)

        