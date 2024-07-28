
let plusNum = document.getElementsByClassName('fas fa-plus-circle');
 //console.log(plusNum);
// plusNum.addEventListener('submit', plusNum);

// let add = plusNum[0]; //Does not add value in this code

for(let i = 0; i < plusNum.length; i++){
    plusNum[i].addEventListener('click', addNum);
}

function addNum(e){
    // e.preventDefault();

    let quantity = document.querySelector('.quantity');
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
    let quantity = document.querySelector('.quantity');
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

