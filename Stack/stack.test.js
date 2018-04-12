
import Stack from './stack.js'

describe('Stack', () => {
  let MyStack

  beforeEach(() => {
    MyStack = new Stack()
    MyStack.init()
    MyStack.push(1)
    MyStack.push(2)
  })
  
  it('top should be 2', () => {
    expect(MyStack.top()).toBe(2)
  })
  
  it('top should be 1', () => {
    MyStack.pop()
    expect(MyStack.top()).toBe(1)
  })

  it('top should be 3', () => {
    MyStack.push(3)
    expect(MyStack.top()).toBe(3)
  })

  it('isEmpty should be false', () => {
    expect(MyStack.isEmpty()).toBeFalsy()    
  })

  it('isEmpty should be true', () => {
    MyStack.clear()
    expect(MyStack.isEmpty()).toBeTruthy()    
  })

  it('size should be 2', () => {
    expect(MyStack.size()).toBe(2)
  })
})
