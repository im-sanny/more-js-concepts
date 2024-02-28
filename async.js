const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("resolve data", data))
  .then((err) => console.log("rejected data", err));

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function loadData() {
  const res = await fetch("");
  const data = await res.json(" ");
  console.log(data);
}

// async arrow
const taskLoader = async () => {
  const res = await fetch("");
  const data = await res.json("");
  console.log(data);
};
taskLoader();
loadData();
