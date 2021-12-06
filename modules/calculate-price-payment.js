export function calculatePrice(selected) {
  let totalPrice = 0;
  let prices = [];
  selected.forEach((e) => {
    if (e.amount >= 1) {
      let oneBeerPrice = e.amount * e.price;
      prices.push(oneBeerPrice);
    } else {
      return;
    }
  });

  totalPrice = prices.reduce((a, b) => a + b);
  return totalPrice;
}
