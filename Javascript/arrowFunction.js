import { TYPE_LOG } from './constants.js'
// Arrow function: viết được nó ngắn gọn hơn so với các function khác

function logger(log, type = TYPE_LOG) {
    console[type](log)
}

// logger('Messi...')

const sum = (a, b) => a + b

console.log(sum(2, 2))

const object = (a, b) => ({ a: a, b: b })

console.log(object(2, 1))

const loggers = log => console.log(log)

loggers('Messiuuu')

const course = {
    name: 'Javacript',
    getName: function () {
        return this // context // arrow function không tồn tại this, không thể sử dụng function constructor
    }
}

console.log(course.getName())

//-------------------------------------------------//

// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object

const arrToObj = arr => {
    const result = arr.reduce((obj, arr) => {
        return {
            ...obj,
            [arr[0]]: arr[1]
        }
    }, {})

    return result
}

// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
 
const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/

export default logger;