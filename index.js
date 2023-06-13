function add(a,b) {
    return a + b;
}
 add(2,5)
function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function increment(n) {
    return ++n;
}
increment()

function decrement(n) {
    return --n;
}

function makeInt(n,base=10) {
//parses n as an integer and returns the parsed integer
    return parseInt(n,base);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

