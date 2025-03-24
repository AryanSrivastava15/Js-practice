const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curValue) {
    console.log(`acc: ${acc} and curValue: ${curValue}`);
    
    return acc + curValue
}, 0)

console.log(myTotal);

// If we have an array of shoppingCart Objects
/*
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)
*/