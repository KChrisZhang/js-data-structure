import QueueObject from './priorityQueue.js'

const Item = QueueObject.Item
const PriorityQueue = QueueObject.PriorityQueue

describe('Item', () => {
  let Item1 = new Item('小红', 1)
  expect(Item1.content()).toBe('小红')
  expect(Item1.priority()).toBe(1)
})

describe('PriorityQueue', () => {
  let MyPriorityQueue
  
  beforeEach(() => {
    MyPriorityQueue = new PriorityQueue()
    MyPriorityQueue.init()
    let Item1 = new Item('小红', 3)
    let Item2 = new Item('小明', 2)
    let Item3 = new Item('小白', 4)

    MyPriorityQueue.enqueue(Item1)
    MyPriorityQueue.enqueue(Item2)
    MyPriorityQueue.enqueue(Item3)
  })

  it('front should be 小明', () => {
    expect(MyPriorityQueue.front()).toBe('小明')
  })

  it('front should be 小红', () => {
    MyPriorityQueue.dequeue()
    expect(MyPriorityQueue.front()).toBe('小红')
  })

  it('front should be 小黑', () => {
    let MyItem = new Item('小黑', 1)
    MyPriorityQueue.enqueue(MyItem)
    expect(MyPriorityQueue.front()).toBe('小黑')
  })

  it('isEmpty should be false', () => {
    expect(MyPriorityQueue.isEmpty()).toBeFalsy()
  })

  it('isEmpty should be true', () => {
    MyPriorityQueue.clear()
    expect(MyPriorityQueue.isEmpty()).toBeTruthy()
  })

  it('size should be 3', () => {
    expect(MyPriorityQueue.size()).toBe(3)
  })
})
