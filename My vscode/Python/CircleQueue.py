class CircleQueue:
    def __init__(self,capacity=8):
        self.capacity=capacity
        self.array=[None]*self.capacity
        self.front=0
        self.rear=0
    def isEmpty(self):
        return self.front==self.rear
    def isFull(self):
        return self.front==(self.rear+1)%self.capacity      
    def enqueue(self,item):
        if not self.isFull():
            self.rear=(self.rear+1)%self.capacity
            self.array[self.rear]=item
        else: pass
    def dequeue(self):
        if not self.isEmpty():
            self.front=(self.front+1)%self.capacity
            return self.array[self.front]
        else:pass
    def peek(self):
        if not self.isEmpty():
            return self.array[(self.front+1) % self.capacity]
        else:pass
    def size(self):
        return (self.rear-self.front+self.capacity) % self.capacity
    def __str__(self):
        if self.front<self.rear:
            return str(self.array[self.front+1:self.rear+1])
        else:
            return str(self.array[self.front+1:self.capacity] + self.array[0:self.rear+1])
        
q=CircleQueue(8)
q.enqueue('A')
q.enqueue('B')
q.enqueue('C')
q.enqueue('D')
q.enqueue('E')
q.enqueue('F')
print('ABCDEF:',q)
print('dequeue:',q.dequeue())
print('dequeue:',q.dequeue())
print('After dequeuing two elements:',q)
q.enqueue('G')
q.enqueue('H') 
print('After enqueuing G and H:',q)