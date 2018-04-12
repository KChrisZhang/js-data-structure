# 队列

运作原理：FIFO（First In First Out，先进先出）

配置：插入、删除、队首元素

特点：在队尾完成插入操作，在队首完成删除操作



## Signature

**class Queue**

单链队列

- init() => Queue:[]item
- enqueue(item) => Queue:[]item
- dequeue() => Queue:[]item
- front() => item
- isEmpty() => boolean
- size() => int
- clear() => Queue:[]item

**class PriorityQueue**

优先队列：队列中的元素有优先级排序，1 优先级最高排在最前面，以此类推

- init() => PriorityQueue:[]Item
- enqueue(item) => PriorityQueue:[]Item
- dequeue() => PriorityQueue:[]Item
- front() => Item
- isEmpty() => boolean
- size() => int
- clear() => PriorityQueue:[]Item

**class Item**

- content：element
- priority：int