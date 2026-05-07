class Node:
    def __init__(self,data,link=None):
        self.data=data
        self.link=link

class LinkedQueue:
    def __init__(self):
        self.tail=None
    def isEmpty(self): return self.tail == None
    def isFull(self): return False
    def enqueue(self,item):
        node = Node(item,None)
        if self.isEmpty():
            self.tail = node
            node.link=node
        else:
            node.link=self.tail.link
            self.tail.link=node
            self.tail=node
    def dequeue(self):
        if not self.isEmpty():
            data = self.tail.link.data
            if self.tail.link==self.tail:
                self.tail=None
            else:
                self.tail.link=self.tail.link.link
            return data
    def peek(self):
        if not self.isEmpty():
            return self.tail.link.data
        return None
    def size(self):
        if self.isEmpty():
            return 0 
        
        count = 1
        current = self.tail.link
        while current != self.tail:
            current = current.link
            count += 1

        return count
        
    def display(self):
        if self.isEmpty():
            print("큐 비어있음")
            return
        
        current=self.tail.link
        while True:
            print(current.data, end=" ")
            if current == self.tail:
                break
            current = current.link

        print()


q = LinkedQueue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

q.display()
print(q.size())

print(q.dequeue())
q.display()

print(q.peek())