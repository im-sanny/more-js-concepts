// The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.

function tellJoke() {
  console.log(
    "Why don't scientists trust atoms? Because they make up everything!"
  );
}

const interval = setInterval(tellJoke, 2000); //help me to understand
setTimeout(() => {
  clearInterval(interval);
}, 10000);
