'use strict'

let BinaryTree = require('./binarytree')

let tree = new BinaryTree()
tree.add('F')
tree.add('B')
tree.add('G')
tree.add('A')
tree.add('D')
tree.add('C')
tree.add('E')
tree.add('I')
tree.add('H')

tree.inOrderTraversalStart()
tree.preOrderTraversalStart()
tree.postOrderTraversalStart()
