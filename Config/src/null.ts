// Explicit null assignment
let value: null = null;

// Optional property that can be null
let user: { name: string; age: number | null } = {
    name: "John",
    age: null,
};

// Function that returns null
function getValue(): string | null {
    return null;
}

// Checking for null
if (user.age === null) {
    console.log("Age is not provided");
}

// Nullish coalescing operator
const displayAge = user.age ?? "Not specified";
console.log(displayAge); // Output: "Not specified"