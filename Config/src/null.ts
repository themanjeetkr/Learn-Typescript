let value: null = null;

let user: { name: string; age: number | null } = {
    name: "John",
    age: null,
};


function getValue(): string | null {
    return null;
}

if (user.age === null) {
    console.log("Age is not provided");
}

const displayAge = user.age ?? "Not specified";
console.log(displayAge); // Output: "Not specified"