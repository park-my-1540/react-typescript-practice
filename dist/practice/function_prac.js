"use strict";
function printName(firstName, formatter) {
    console.log('printName');
    console.log(formatter(firstName));
}
function formatName(name) {
    console.log('formatName');
    return `${name}야 안녕`;
}
printName('시아팍', formatName);
