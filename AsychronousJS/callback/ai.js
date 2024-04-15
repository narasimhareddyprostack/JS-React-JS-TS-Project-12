function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
function wish() {
    console.log('Callback function executed!');
}
greet('Rahul',wish );