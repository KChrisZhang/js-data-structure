import Queue from './queue.js'

describe('Queue', () => {
  let MyQueue

  beforeEach(() => {
    MyQueue = new Queue()
    MyQueue.init()
    MyQueue.enqueue(1)
    MyQueue.enqueue(2)
  })

  it('front should be 1', () => {
    expect(MyQueue.front()).toBe(1)
  })

  it('front should be 2', () => {
    MyQueue.dequeue()
    expect(MyQueue.front()).toBe(2)
  })

  it('front should be 1', () => {
    MyQueue.enqueue(3)
    expect(MyQueue.front()).toBe(1)
  })

  it('isEmpty should be false', () => {
    expect(MyQueue.isEmpty()).toBeFalsy()
  })

  it('isEmpty should be true', () => {
    MyQueue.clear()
    expect(MyQueue.isEmpty()).toBeTruthy()
  })

  it('size should be 2', () => {
    expect(MyQueue.size()).toBe(2)
  })
})
