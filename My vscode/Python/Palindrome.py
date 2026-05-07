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

def isPalindrome(msg):
    stack = ArrayStack(len(msg))

    #문자, 숫자만 남기기
    clean = ""
    for ch in msg:
        if ch.isalnum():     # 문자,숫자만 허용
            clean += ch.lower()

    #스택에 넣기
    for ch in clean:
        stack.push(ch)

    #비교
    for ch in clean:
        if ch != stack.pop():
            return False

    return True

msg = input("문자열 입력: ")

if isPalindrome(msg):
    print("회문입니다.")
else:
    print("회문이 아닙니다.")