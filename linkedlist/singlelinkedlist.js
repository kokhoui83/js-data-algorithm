'use strict'

let Node = require('./node')

class LinkedList {
  construct() {
    this.head
    this.current
  }

  add(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.current = node
      return
    }

    this.current.next = node
    this.current = node
    return
  }

  traverse () {
    if (this.head) {
      let tmp = this.head
      while(tmp) {
        console.log(tmp.value)
        tmp = tmp.next
      }
    }
  }
}

module.exports = LinkedList
