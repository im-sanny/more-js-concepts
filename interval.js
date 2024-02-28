console.log(1);
console.log(2);
// setTimeout(() => {
//     console.log('lets get it')
// }, 2000);
console.log(5);
console.log(6);

let num = 0;
const clockId = setInterval(() => {
  // num ++;
  num += 1;
  if (num > 6) {
    clearInterval(clockId);
  }
  console.log(clockId, num);
}, 2000);
