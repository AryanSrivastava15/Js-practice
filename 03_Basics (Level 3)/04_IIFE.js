// Immediately Invoked Function Expression (IIFE)

(function one() {
    console.log(`DB Connected`)
})();  //Semicolon is needed here
// There are problems due to global scope pollution.
// So to remove that pollution we use IIFE.

((name) => {
    console.log(`DB Connected by ${name}`)
})("Aryan")