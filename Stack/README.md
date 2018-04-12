# 堆栈

运作原理：LIFO（Last In First Out，后进先出）

配置：插入、删除、栈顶元素

特点：插入和删除操作都在栈顶完成



## Signature

class Stack

- init() => Stack:[]item
- push(item) => Stack:[]item
- pop() => Stack:[]item
- top() => item
- isEmpty() => boolean
- size() => int
- clear() => Stack:[]item