const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')

const basename = path.basename('content', 'subfolder', 'test.txt')

const extname = path.extname('test.txt')

console.log(filePath)
console.log(extname)
console.log(basename)
