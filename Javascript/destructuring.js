// Destructuring: phân rã, lấy trực tiếp Element bên trong mà không cần đi qua Array trả chúng dưới dạng String
// Rest: được sử dụng với Destructuring

var array = ['Javascript', 'PHP', 'Ruby']

var [a, c] = array

console.log(a, c)

var [a, b, ...rest] = array

console.log(rest)

var course = {
    name: 'Javascript',
    price: 1000,
    children: {
        name: 'ReactJS'
    }
}

var { name, ...rest } = course

console.log(rest)

var { name: parentName, children: { name } } = course

console.log(parentName)
console.log(name)

const {
    x = 'default',
    y,
    ...param
} = {
    y: 'val1',
    z: 'val2',
    w: 'val3'
};

console.log(x, y, param);