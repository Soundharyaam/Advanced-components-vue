let price = 5;
let quantity = 2;
let total = 0;
let target = null;
let storage = [];

function target() {
  total = price * quantity;
}

const record = () => {
  storage.push(target);
};
const replay = () => {
  storage.forEach(run => run());
};

// console.log(total);
price = 20;
replay();
// console.log(total);
