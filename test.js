var express = require('express')
  , ei = require('./')
  , assert = require('assert')

var main, child

// Case 1

main = express()
child = express()

ei(child)

main.disable('x-powered-by')
child.set('hello', 'world')

assert(main.set('x-powered-by') === false)
assert(child.set('x-powered-by') === true)
assert(child.set('hello') === 'world')

main.use(child)

assert(child.set('x-powered-by') === false)
assert(child.set('hello') === 'world')


// Case 2

main = express()
child = express()

ei(child, main)

main.disable('x-powered-by')
child.set('hello', 'world')

assert(main.set('x-powered-by') === false)
assert(child.set('x-powered-by') === false)
assert(child.set('hello') === 'world')

