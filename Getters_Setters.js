let data = { price: 5, quantity: 2 };
Object.keys(data).forEach(key => {
  let internalValue = data[key];
  const dep = new Dep();
  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return intervalValue;
    },
    set(newVal) {
      intervalValue = newVal;
      dep.notify();
    }
  });
});

total = date.price * data.quantity;
//console.log("total", total);

date.price = 20;
