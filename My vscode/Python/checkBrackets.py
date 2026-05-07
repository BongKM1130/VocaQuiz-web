class ArrayStack :
    def __init__ (self,capacity):
        self.capacity=capacity
        self.array=[None]*self.capacity
        self.top= -1
    def isEmpty(self):
        return self.top==-1
    def isFull(self):
        return self.top == self.capacity-1
    def push(self,e):
        if not self.isFull():
            self.top+=1
            self.array[self.top]=e
        else: pass
    def pop(self):
        if not self.isEmpty():
            e = self.array[self.top]
            self.top-=1
            self.array[self.top+1]
            return e
        else:pass
    def peek(self):
        if not self.isEmpty():
            return self.array[self.top]
        else:pass
def checkBrackets(statement):
    stack=ArrayStack(100)

    line = 1 # 줄 번호
    st = 0 #문자위치
    in_string = False # 문자열 안에 있는지 여부
    string_char = '' # 문자열 구분자  
    i = 0
    while i < len(statement):
        ch = statement[i]
        st += 1

        #줄 처리
        if ch == '\n':
            line += 1
            st = 0
            i += 1
            continue

        #문자열 시작/끝
        if ch == '"' or ch == "'":
            if not in_string:
                in_string = True
                string_char = ch
            elif string_char == ch:
                in_string = False
            i += 1
            continue

        #문자열 안이면 무시
        if in_string:
            i += 1
            continue

        #주석 처리 (#)
        if ch == '#':
            while i < len(statement) and statement[i] != '\n':
                i += 1
            continue
        if ch=='{' or ch=='[' or ch=='(' :
            stack.push((ch,line,st))
        elif ch=='}' or ch==']' or ch==')':  
            if stack.isEmpty():
                print(f"{line}줄 {st}칸 : 닫히는 괄호가 먼저 나옴 조건 2 위반 ")
                return False
            else:
                left = stack.pop()
                if (ch=='}' and left !='{') or \
                (ch==']' and left != '[') or \
                (ch==')' and left != '('):
                    print(f"{line}줄 {st}칸 : 괄호 짝이 맞지않음 조건3 위반")
                    return False
    if stack.isEmpty()==True:
        return True 
    else: 
        print(f"{line}줄 {st}칸 : 스택이 비어있지않아 조건 1 위반")
        return False

filename = input("검사할 파이썬 파일 이름 입력: ")

with open(filename, "r", encoding="utf-8") as f:
    code = f.read()

result = checkBrackets(code)

print("결과:", result)