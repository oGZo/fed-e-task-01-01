const fp = require('lodash/fp')
const { Container, Maybe } = require('./support')


// 第1题
let maybe = Maybe.of([5, 6, 1])


let ex1 = (num = 1) => {
    let res = maybe
        .map(fp.map(fp.add(num)))
    console.log(res, res._value);
}
ex1();




// 第2题
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])


let ex2 = () => {
    let res = xs
        .map(fp.first)
    console.log(res, res._value);
}
ex2();


// 第3题
let safeProp = fp.curry(function(x, o){
    return Maybe.of(o[x])
})


let user = { id: 2, name: 'Albert'}
let ex3 = () => {
    let res = safeProp('name', user).map(fp.first)
    console.log(res, res._value);
}
ex3();

// 第4题

let ex4 = (n) => {
    let res = Maybe.of(n).map(parseInt)
    console.log(res, res._value)
    return res._value
}
ex4('4')