const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const guantity=document.getElementById("guantity");
const Order=document.getElementById("Order");
const Price=document.getElementById("Price");
let price=150;

function updatePrice(){
    let current=parseInt(guantity.value);
    let total=(current*price).toFixed(2);
    Price.innerHTML=total;
}
minus.addEventListener("click",()=>{
    let current=parseInt(guantity.value);
    if(current>1){
        guantity.value=current-1;
        updatePrice();
    }
});

plus.addEventListener("click",()=>{
    guantity.value=parseInt(guantity.value)+1;
    updatePrice();
});

Order.addEventListener("click",()=>{
    alert("add")
})