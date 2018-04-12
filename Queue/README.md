# 队列

运作原理：FIFO（First In First Out，先进先出）

配置：插入、删除、队首元素

特点：在队尾完成插入操作，在队首完成删除操作



## Signature

**class Queue**

单链队列

- init() => Queue
- enqueue(item) => Queue
- dequeue() => Queue
- front() => item
- isEmpty() => boolean
- size() => int
- clear() => Queue

**class CircularQueue**

循环队列

- ​