function DoMath(str) {
    return Function(`'use strict'; return (${str})`)()
}

const equation = `1+1`;

const answer = `${quation} = ${DoMath(equation)}`
console.log(answer);