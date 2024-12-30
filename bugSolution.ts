function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result = add(10, 5); // Correct usage
console.log(result); // Output: 15

try {
  let result2 = add("hello", 5); 
} catch (error) {
  console.error(error.message); // Output: Inputs must be numbers
}
