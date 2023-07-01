// Arrow function: viết được nó ngắn gọn hơn so với các function khác

const logger = (log) => {
    console.log(log)
}

logger('Messi...')

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