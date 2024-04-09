// Create a new Set
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Check if a value is in the Set
console.log(mySet.has(2)); // true

// Remove a value from the Set
mySet.delete(2);

// Get the size of the Set
console.log(mySet.size); // 2

// Iterate over the Set
mySet.forEach((value) => {
  console.log(value);
});