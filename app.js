

//for product one

// console.log(productPrice);
const productOnePrice = parseFloat(document.getElementById('price-one').innerText) / parseFloat(document.getElementById('quantity-one').value);


//for incrementing quantity

document.getElementById('increment-one').addEventListener('click', function(){
    let quantity = parseFloat(document.getElementById('quantity-one').value);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    quantity++;
    document.getElementById('decrement-one').disabled = false;
    document.getElementById('quantity-one').value = quantity
    document.getElementById('price-one').innerText = productOnePrice * quantity;
    document.getElementById('subtotal').innerText = subTotal + productOnePrice;
    document.getElementById('total').innerText = subTotal + productOnePrice;
})


//for decrement quantity
document.getElementById('decrement-one').addEventListener('click', function(){
    let quantity = parseFloat(document.getElementById('quantity-one').value);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    quantity --;
    if(quantity == 0){
        document.getElementById('quantity-one').value = quantity;
        document.getElementById('price-one').innerText = productOnePrice * quantity;
        document.getElementById('subtotal').innerText = subTotal - productOnePrice;
        document.getElementById('total').innerText = subTotal - productOnePrice;
        document.getElementById('decrement-one').disabled = true;
    }
    else {
        document.getElementById('quantity-one').value = quantity;
        document.getElementById('price-one').innerText = productOnePrice * quantity;
        document.getElementById('subtotal').innerText = subTotal - productOnePrice;
        document.getElementById('total').innerText = subTotal + productOnePrice;
    }
})

//for product cancellation
document.getElementById('remove-one').addEventListener('click', function(){
    const cartid = document.getElementById('product-one');
    const currPrice = parseFloat(document.getElementById('price-one').innerText);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    cartid.style.display = 'none';
    document.getElementById('subtotal').innerText = subTotal - currPrice;
    document.getElementById('total').innerText = subTotal - currPrice;
})



//for product two

// console.log(productPrice);
const productTwoPrice = parseFloat(document.getElementById('price-two').innerText) / parseFloat(document.getElementById('quantity-two').value);


//for incrementing quantity

document.getElementById('increment-two').addEventListener('click', function(){
    let quantity = parseFloat(document.getElementById('quantity-two').value);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    quantity++;
    document.getElementById('decrement-two').disabled = false;
    document.getElementById('quantity-two').value = quantity;
    document.getElementById('price-two').innerText = productTwoPrice *  quantity;
    document.getElementById('subtotal').innerText = subTotal + productTwoPrice;
    document.getElementById('total').innerText = subTotal + productTwoPrice;
})


//for decrement quantity
document.getElementById('decrement-two').addEventListener('click', function(){
    let quantity = parseFloat(document.getElementById('quantity-two').value);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    quantity --;
    if(quantity == 0){
        document.getElementById('quantity-two').value = quantity;
        document.getElementById('price-two').innerText = productTwoPrice * quantity;
        document.getElementById('subtotal').innerText = subTotal - productTwoPrice;
        document.getElementById('total').innerText = subTotal - productTwoPrice;
        document.getElementById('decrement-two').disabled = true;
    }
    else {
        document.getElementById('quantity-two').value = quantity;
        document.getElementById('price-two').innerText = productTwoPrice * quantity;
        document.getElementById('subtotal').innerText = subTotal - productTwoPrice;
        document.getElementById('total').innerText = subTotal - productTwoPrice;
    }
})

//for product cancellation
document.getElementById('remove-two').addEventListener('click', function(){
    const cartid = document.getElementById('product-two');
    const currPrice = parseFloat(document.getElementById('price-two').innerText);
    const subTotal = parseFloat(document.getElementById('subtotal').innerText);
    cartid.style.display = 'none';
    document.getElementById('subtotal').innerText = subTotal - currPrice;
    document.getElementById('total').innerText = subTotal - currPrice;
})