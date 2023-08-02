const addStorage = ()=>{
    const product = document.getElementById('product-field');
    const quentity = document.getElementById('quentity-field');
    const productField = product.value ;
    const quentityField = quentity.value ;

    product.value= '';
    quentity.value='';

    console.log(productField,quentityField);

    prientElement(productField,quentityField);
    saveProductToLocalStorage(productField,quentityField);
}

const prientElement = (productField,quentityField) =>{
    const ul = document.getElementById('print');
    const li = document.createElement('li');

    li.innerText =`${productField}: ${quentityField}`;
    
    ul.appendChild(li);
}


const gatStordShoppingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (productField,quentityField) =>{
   const cart = gatStordShoppingCart();
   cart[productField] = quentityField;
   const cartStringfy = JSON.stringify(cart);
   localStorage.setItem('cart',cartStringfy);
}



const displayProductFormTheLocalStorage = () =>{
    const saveCart = gatStordShoppingCart();
    console.log(saveCart);

    for(productField in saveCart){
       console.log(saveCart);
        const quentityField = saveCart[productField];
        console.log(productField,quentityField);
        prientElement(productField,quentityField);

    }
}

displayProductFormTheLocalStorage();