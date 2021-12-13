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
if (prices.length>0){
  totalPrice = prices.reduce((a, b) => a + b);}
  else {totalPrice = 0}
  return totalPrice;
}
