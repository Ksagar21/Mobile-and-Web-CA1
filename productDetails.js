// productDetails.js
// 
// here dom is executed we need to wait it get executed fully
document.addEventListener('DOMContentLoaded', function () {

    // here we get products details from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const productName = decodeURIComponent(urlParams.get('name'));
    const productDescription = decodeURIComponent(urlParams.get('description'));
    const productPrice = parseFloat(urlParams.get('price'));
    const productImage = urlParams.get('image');
  
    // here we get to see the display products details on the page
    

    console.log('Product ID:', productId);
    
    const productNameElement = document.getElementById('product-name');
    const productDescriptionElement = document.getElementById('product-description');
    const productPriceElement = document.getElementById('product-price');
    const productImageElement = document.getElementById('product-image');    
  /////////
    // // Set the image source dynamically based on the product ID
    // productImageElement.src = productImage;
    // productImageElement.alt = `${productName} Image`;
    // productNameElement.src = productName;
    // productDescriptionElement.textContent = productDescription;
    // productPriceElement.textContent = `Price: $${productPrice.toFixed(2)}`;

    //
    // Set the image source dynamically based on the product ID
productImageElement.src = productImage;
productImageElement.alt = `${productName} Image`;

// Set the product name dynamically
productNameElement.textContent = productName;

// Set the product description dynamically
//productDescriptionElement.textContent = productDescription;

// Set the product price dynamically
//productPriceElement.textContent = `Price: $${productPrice.toFixed(2)}`;

    
  });
  