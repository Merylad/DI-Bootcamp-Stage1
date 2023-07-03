// Create a curried function, that returns the volume of an object the volume is calculated like this length * weight * height
// Call the function twice, for products of length 10cm. Weight and Height can differ
// Call the function twice, for products of length 10cm and weight 2 grams, height can differ

function volume (lenght){
    return function (weight){
        return function (height){
            return lenght*weight*height;
        }
    }
}

const volume1 = volume (10);
const volume11 = volume1(12)(15) // volume1(8)(10)

const volume2 = volume(10)(2)
const volume22 = volume2(12) // volume2(5)


function addition (a, b, c) {
    return a + b + c
}

addition(2,3,4)

// CURRYING

function addition (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const result = addition(2)(3)(4)
console.log(result);


function changeMoney (currency1) {
    return function (amount) {
        return function (rate) {
            return `I change ${currency1} : ${amount*rate}`
        }
    }
}

// const changeMoney = (currency1) => (amount) => (rate) => `I change ${currency1} : ${amount*rate}`



const dollars = changeMoney("dollars");
const result1 = dollars(100)(1.4)
const result2 = dollars(30)(1.3)
const result4 = dollars(12)(1.1)
console.log(result2);

const euros = changeMoney("euros");
const result12 = dollars(100)(1.4)
const result22 = dollars(30)(1.3)
const result42 = dollars(12)(1.1)