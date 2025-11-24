// export default is used to export a single value from a module
// we can export a single value from a module by using default keyword
const a = ['apple', 'banana', 'cherry'];
export default a;


// Named export is used to export multiple values from a module
// we can export multiple values from a module by using curly braces
// we can import multiple values from a module by using curly braces
// we can import multiple values from a module by using the same name as the exported value
// we can import multiple values from a module by using the same name as the exported value

const b = ['BMW', 'Audi', 'Mercedes Benz'];
const c = ['100', '200', '300'];
export { b, c };