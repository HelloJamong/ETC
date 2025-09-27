#1. 세 수가 모두 같은지 확인
num1 = input()
num2 = input()
num3 = input()

if num1 == num2 and num2 == num3:
    print("All same")
elif num1 == num2 or num2 == num3 or num1 == num3:
    print("Two same")
else:
    print("All different")

#2. 문자로 판별: 알파벳인지 아닌지
text = input()
if text.isalpha():
    print("Alphabet")
elif text.isdigit():
    print("Digit")
else:
    print("Other")


#3. 정수 3개를 오름차순 정렬하여 출력
n1 = input()
n2 = input()
n3 = input()

if n1 > n2:
    n1, n2 = n2, n1

if n2 > n3:
    n2, n3 = n3, n2

if n1 > n2:
    n1, n2 = n2, n1

print(f"{n1}, {n2}, {n3}")

#4. 로그인 시도 시 계정 확인
account = input()
passwd = input()

if account == "admin" and passwd == "1234":
    print("Login Success")
elif account == "admin" and passwd != "1234":
    print("Wrong Password")
else:
    print("No Such User")
    