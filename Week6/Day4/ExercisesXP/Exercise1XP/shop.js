const products = require('./products');  

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log(`Product found:`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`Product with name '${productName}' not found.`);
  }
}

findProductByName("Laptop");
findProductByName("Smartphone");
findProductByName("T-shirt");
findProductByName("Coffee Maker");
findProductByName("Headphones");
findProductByName("Nonexistent Product"); 
