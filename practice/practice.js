// task - 1
// 1a) Write a function that displays a message after 5s.

// 1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

// Input:
// delayGreeting(‘Alice’, 2000)

// Output:
// Hello, Alice!

setTimeout(() => {
  console.log("Yep i am the delayed message");
}, 5000);

function delayedGreeting(name, delayTime) {
  setTimeout(() => {
    console.log(`Hello ${name}!`);
  }, delayTime);
}
delayedGreeting("Alice", 1000);
