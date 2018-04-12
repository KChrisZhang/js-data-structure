class Item {
  constructor(content, priority) {
    this._content = content
    this._priority = priority
    return this
  }
  content() {
    return this._content
  }
  priority() {
    return this._priority
  }
}

class PriorityQueue {
  constructor() {
    this._type = 'PriorityQueue'
  }
  init() {
    this._Items = []
  }
  enqueue(Item) {
    let Items = this._Items
    let len = Items.length

    if (Items.length === 0) {
      this._Items.push(Item)
    } else {      
      for (let i = 0; i < len; i++) {
        if (Item.priority() < Items[i].priority()) {
          this._Items.splice(i, 0, Item)
          break
        }
      }
      if (len === this._Items.length) {
        this._Items.push(Item)
      }
    }
    return this._Items
  }
  dequeue() {
    if (this._Items.length === 0) {
      console.log('PriorityQueue is null.')
      return 'undefined'
    }
    this._Items.shift()
    return this._Items
  }
  front() {
    return this._Items[0].content()
  }
  isEmpty() {
    return this._Items.length === 0
  }
  size() {
    return this._Items.length
  }
  clear() {
    this._Items = []
  }
}

export default {
  Item: Item,
  PriorityQueue: PriorityQueue
}
