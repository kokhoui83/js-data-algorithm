'use strict'

let Node = require('./node')

class BinaryTree {
  constructor () {
    this.root
  }

  add (value) {
    let node = new Node(value)

    if (!this.root) {
      this.root = node
      return
    }

    let focus = this.root
    while(true) {
      if (node.value < focus.value) {
        if (!focus.left) {
          focus.left = node
          return
        }
        focus = focus.left
      } else {
        if (!focus.right) {
          focus.right = node
          return
        }
        focus = focus.right
      }
    }
  }

  inOrderTraversalStart () {
    console.log('inOrderTraversalStart')
    this.inOrderTraversal(this.root)
  }

  inOrderTraversal (focus) {
    if (focus) {
      this.inOrderTraversal(focus.left)
      console.log(focus.value)
      this.inOrderTraversal(focus.right)
    }
  }

  preOrderTraversalStart () {
    console.log('preOrderTraversalStart')
    this.preOrderTraversal(this.root)
  }

  preOrderTraversal (focus) {
    if (focus) {
      console.log(focus.value)
      this.preOrderTraversal(focus.left)
      this.preOrderTraversal(focus.right)
    }
  }

  postOrderTraversalStart () {
    console.log('postOrderTraversalStart')
    this.postOrderTraversal(this.root)
  }

  postOrderTraversal (focus) {
    if (focus) {
      this.postOrderTraversal(focus.left)
      this.postOrderTraversal(focus.right)
      console.log(focus.value)
    }
  }
}

module.exports = BinaryTree
