# Express Inherits

[![build status](https://secure.travis-ci.org/tellnes/express-inherits.png)](http://travis-ci.org/tellnes/express-inherits)

Inherits settings from parent app when mounting express apps. Please se
[visionmedia/express#1637](https://github.com/visionmedia/express/issues/1637)
for details.

## Example

```js
var express = require('express')
  , ei = require('express-inherits')

var main = express()
  , child = express()

ei(child)

main.use(child)
```

## Install

    npm install -S express-inherits

## Licence

MIT

