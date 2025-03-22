/* 
JavaScript Execution Context

code file ---> Global Execution Context
                (this)

--> Global Execution Context
--> Function Execution Context
--> Eval Execution Context (Property of GEC)

[{Code File}] --> Memory Creation Phase
             |-->Execution Phase
Run in two phases:
    i. Global Execution (this)
    ii. Memory Phase (Variable are collected and saved here)
        a. val1 = undefined
        b. val2 = undefined
        c. addNum --> definition
        d. result1 = undefined
        e. result2 = undefined
    iii. Execution Phase
        a. val1 = 10
        b. val2 = 5
        c. addNum --> new variable environment + Execution thread
            - Memory Phase:
                - val1 = undefined
                - val2 = undefined
                - total = undefined
            - Execution Context:
                - num1 = 10
                - num2 = 5
                - total = 15
            Note: Will get delete after completion
        d. result1 = 15
        e. result2 = 12
            addNum --> new variable environment + Execution thread
            - Memory Phase:
                - val1 = undefined
                - val2 = undefined
                - total = undefined
            - Execution Context:
                - num1 = 10
                - num2 = 5
                - total = 15
            Note: Will get delete after completion

*/

let val1 = 10
let val2 = 5

function addNum(num1, num2){ //definition
    let total = num1 + num2 
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1, result2)

// Call Stack --> Follows LIFO (The function which enters the stack last exits first)
//            --> If func one() goes in stack and calls two() and it calls three() than three goes out of stack first than the nest two
//            --> If one() goes in and don't call any other func than it comes out than next one goes in.
