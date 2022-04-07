var fs = require('fs')
const { nextTick } = require('process')

console.log('readFile work')
var result = fs.readFileSync('sample.txt', 'utf8')
console.log(result)
console.log('c')


console.log('asynchronous')

fs.readFile('sample.txt', 'utf-8', function(err,result){
    console.log(result)
    
    
})
console.log('c')