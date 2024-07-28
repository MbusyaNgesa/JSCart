
let plusNum = document.getElementsByClassName('fa-plus-circle');
 //console.log(plusNum);
// plusNum.addEventListener('submit', plusNum);

// let add = plusNum[0]; //Does not add value in this code

for(let i = 0; i < plusNum.length; i++){
    plusNum[i].addEventListener('click', addNum);
}

function addNum(e){
    // e.preventDefault();

    let parentElement = e.target.closest('.card-body') //closest represents the closest element that's been clicked
    let quantity = parentElement.querySelector('.quantity');


    // console.log(quantity);
    let quantityValue = quantity.innerText;
    console.log(quantityValue);
    // console.log(typeof quantityValue)
    quantityValue = parseInt(quantityValue) + 1;
    console.log(quantityValue);

    quantity.innerText = quantityValue;
}

//Minus operation
let minusNum = document.getElementsByClassName('fas fa-minus-circle');
// console.log(minusNum)
for(let i = 0; i < minusNum.length; i++){
    minusNum[i].addEventListener('click', removeNum);
}

function removeNum(e){

    let parentElement = e.target.closest('.card-body') //closest represents the closest element that's been clicked
    let quantity = parentElement.querySelector('.quantity'); //closest element with 'quality' class that is in the card-body element

    // console.log(quantity);
    let quantityValue = quantity.innerText;
    console.log(quantityValue);
    quantityValue = parseInt(quantityValue) - 1;
    if(quantityValue < 0){
        return false;
    }
    console.log(quantityValue);

    quantity.innerText = quantityValue;
}

//Remove Items from shopping card

let productList = document.getElementsByClassName('fa-trash-alt');
for(let i = 0; i < productList.length; i++){
    productList[i].addEventListener('click', removeProduct);
}

function removeProduct(e){
    if(e.target.classList.contains('remove')){
        let deleteProduct = e.target.parentElement.parentElement.parentElement;
        // productList.removeChild(deleteProduct);
        deleteProduct.remove();
    }


    //Does not work- you tried to reverse what is happening above
    // if(e.target.classList.contains('card-body')){
    //     let deleteProduct = e.target.childNodes;
    //     productList.removeChild(deleteProduct);
    // }

}

//Like Button 
let like = document.getElementsByClassName('fa-heart');
// console.log(like);
for(let i = 0; i < like.length; i++){
    like[i].addEventListener('click', addLike,);
}
function addLike(e){
        this.style.color = 'red'; //'this' refers to the element that triggered the event
       
    };
    
// Quantity should be multiplied to the cost of the product 
// Added to the other products
// Delete if - is clicked
// Total is displayed on the screen 

//Total Sum
let total = document.getElementsByClassName('fa-plus-circle');
//  console.log(total)
 
for(let i = 0 ; i < total.length; i++){
    total[i].addEventListener('click', totalPrice);
}

function totalPrice(e){
    let a = document.getElementsByClassName('unit-price').innerText;
    let b = document.getElementsByClassName('quantity').value;
    let totalSum = 0;

    // let result = parseInt(a) * parseInt(b);
    // result += document.getElementsByClassName('card-body');
   
   for(let i = 0; i < a.length; i++){
    let price = parseInt(a[i].innerText);
    let quantity = parseInt(b[i].innerText);

    totalSum += price * quantity;
   }
  
   document.getElementsByClassName('total').innerText = totalSum;
    

}
