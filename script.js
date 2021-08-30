const dic = document.getElementById('dic');
const inc = document.getElementById('inc');
const itemval = document.getElementById('textBox');
const tShirtprize = document.getElementById('productPrice');
const price = document.getElementById('price');
const productAmmount = document.getElementById('productAmmount');
const totalAmmount = document.getElementById('totalAmmount');
const offer = document.getElementById('offer');
const offerButton = document.getElementById('offerButton');
const offerTitle = document.getElementById('offerTitle');





dic.addEventListener('click',function(){
    if(itemval.value< 1){
        itemval.value = 0;
    }
    else{
        itemval.value = parseInt(itemval.value) - 1
    }
    
    price.innerHTML = itemval.value * 15;
    productAmmount.innerHTML = itemval.value * 15;
    totalAmmount.innerHTML = itemval.value * 15 + 20;

    
});
inc.addEventListener('click',function(){
    if(itemval.value > 4){
        itemval.value = 0;
    }
    else{
        itemval.value = parseInt(itemval.value) + 1
    }
    price.innerHTML = "$" + itemval.value * 15;
    productAmmount.innerHTML = itemval.value * 15;
    totalAmmount.innerHTML = itemval.value * 15 + 20;
});

offerButton.addEventListener('click',function(){
    let mycode = "rakib25";
    let usercode = offer.value;
    if(mycode == usercode){
        offerTitle.innerHTML = "Congratulations";
        totalAmmount.innerHTML = itemval.value * 15 + 20 - 10;
    }
    else{
        offerTitle.innerHTML = "better luck next time";
    }
})