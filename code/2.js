const fp = require('lodash/fp')
const cars = [
    {
        name: 'Ferrari FF',
        horsepower: 660,
        dallor_value: 700000,
        in_stock: true,
    },
    {
        name: 'Spkyer C12 Zagato',
        horsepower: 650,
        dallor_value: 648000,
        in_stock: false,
    },
    {
        name: 'Jaguar XKR-S',
        horsepower: 550,
        dallor_value: 132000,
        in_stock: false,
    },
    {
        name: 'Audi R8',
        horsepower: 525,
        dallor_value: 114200,
        in_stock: false,
    },
    {
        name: 'Aston Martin One-77',
        horsepower: 750,
        dallor_value: 1850000,
        in_stock: true,
    },
    {
        name: 'Pagani Huayra',
        horsepower: 700,
        dallor_value: 1300000,
        in_stock: false,
    },
]

// 第1题

let inLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)(cars)
console.log(inLastInStock)

// 第2题
let FirstNameInStock = fp.flowRight(fp.prop('name'),fp.first)(cars)
console.log(FirstNameInStock)


// 第3题
let _average = function(xs){
    return fp.reduce(fp.add, 0, xs) / xs.length
}

let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop('dallor_value')))(cars)
console.log(averageDollarValue);


// 第4题
const _underline = fp.replace(/\W+/g, '_')
const sanitizeNames = fp.map(fp.flowRight(_underline, fp.lowerCase))

console.log(sanitizeNames(['Hello World']))