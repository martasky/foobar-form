export function calculateTotalPrice(){
    let totalPrice = 0;
    document.querySelectorAll(".calculated_price").forEach((price) => {
        totalPrice = totalPrice + Number(price.textContent);
      });
      document.querySelector(".total_price span").textContent = totalPrice;
}