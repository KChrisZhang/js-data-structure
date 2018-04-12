
import Stack from './stack.js'

describe('Stack', () => {
  let MyStack

  beforeEach(() => {
    MyStack = new Stack()
    MyStack.init()
    MyStack.push(1)
    MyStack.push(2)
  })
  
  it('pop should output 2', () => {
    MyStack.pop()
    expect(MyStack.top()).toBe(1)
  })

  it('isEmpty should be false', () => {
    expect(MyStack.isEmpty()).toBeFalsy()    
  })

  it('peek should be 1', () => {
    MyStack.push(3)
    expect(MyStack.top()).toBe(3)
  })

  it('size should be 0', () => {
    MyStack.clear()
    expect(MyStack.size()).toBe(0)
  })
})
