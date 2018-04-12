export default class Queue {
  constructor () {
    this._name = "Queue"
  }
  init () {
    this._items = []
  }
  enqueue (item) {
    this._items.push(item)
    return this._items
  }
  dequeue () {
    if (this._items.length === 0) {
      console.log('Queue is null.')
    } else {
      this._items.shift()
    }
    return this._items
  }
  front () {
    if (this._items.length === 0) {
      console.log('Stack is null')
      return 'undefined'
    }
    return this._items[0]
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
