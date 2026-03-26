"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Explicit null assignment
let value = null;
// Optional property that can be null
let user = {
    name: "John",
    age: null,
};
// Function that returns null
function getValue() {
    return null;
}
// Checking for null
if (user.age === null) {
    console.log("Age is not provided");
}
// Nullish coalescing operator
const displayAge = user.age ?? "Not specified";
console.log(displayAge); // Output: "Not specified"
//# sourceMappingURL=null.js.map