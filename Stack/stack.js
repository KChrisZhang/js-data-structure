
export default class Stack {
  constructor () {
    this._name = 'Stack'
  }
  init () {
    this._items = []
  }
  push (item) {
    this._items.push(item)
    return this._items
  }
  pop () {
    if (this._items.length === 0) {
      console.log('Stack is null.')
    } else {
      this._items.pop()
    }
    return this._items
  }
  top () {
    if (this._items.length === 0) {
      console.log('Stack is null.')
      return 'null'
    }
    return this._items[this._items.length - 1]
  }
  isEmpty () {
    return this._items.length === 0
  }
  size () {
    return this._items.length
  }
  clear () {
    return this._items = []
  }
}
