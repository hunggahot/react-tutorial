// Spread Operator: Toán tử dãy (...)

var array1 = ['Javascript', 'Ruby', 'PHP']

var array2 = ['ReactJS', 'Hung']

var array3 = [...array2, ...array1];

console.log(array3)


var obj1 = {
    name: 'Javascript'
}

var obj2 = {
    price: 1000
}

var obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
    //
    //
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap'
}

console.log(exerciseConfig)