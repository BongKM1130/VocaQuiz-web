class ArrayStack:
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
            return e
        else:pass

    def peek(self):
        if not self.isEmpty():
            return self.array[self.top]
        else:pass
            

#후위수식 계산
def evalPostfix(expr):
    s=ArrayStack(100)

    for token in expr:
        if token in "+-*/":
            val2=s.pop()
            val1=s.pop()
            if(token=='+'):s.push(val1+val2)
            elif(token=='-'):s.push(val1-val2)
            elif(token=='*'):s.push(val1*val2)
            elif(token=='/'):s.push(val1/val2)
        else:s.push(float(token))
    return s.pop()
#연산자 우선순위
def precedence(op):
    if op=='(' or op==')': return 0
    elif op=='+' or op=='-':return 1
    elif op=='*' or op=='/':return 2
    else:return -1
#중위표기 -> 후위표기
def Infix2Postfix(expr):
    s=ArrayStack(100)
    output=[]

    for term in expr :
        if term in '(' :
            s.push('(')

        elif term in ')':
            while not s.isEmpty():
                op= s.pop()
                if op=='(':
                    break;
                else:
                    output.append(op)
        elif term in "+-*/":
            while not s.isEmpty():
                op=s.peek()
                if(precedence(term)<=precedence(op)):
                    output.append(op)
                    s.pop()
                else: break
            s.push(term)

        else:
            output.append(term)
    while not s.isEmpty():
        output.append(s.pop())
    return output

a=list(map(str, input("입력수식(공백문자로 분리)= ").split()))
infix1=a
postfix1=Infix2Postfix(infix1)
print("중위표기: ",a)
print("후위표기: ",postfix1)
print("계산결과: " , evalPostfix(postfix1))  