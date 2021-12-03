export function displayOrderNumbers(orders){
 console.log(orders)
 document.querySelector("#serving").innerHTML = "";
 if(orders.length>0){
 orders.forEach((order)=>{
    const copy = document.querySelector("#orders_template").content.cloneNode(true);
    copy.querySelector(".now_serving").textContent = order.id;
    document.querySelector("#serving").appendChild(copy)
 })
}
}