class Product {
    readonly id: number;
    public name: string;
    public price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    public getProductInfo(): string {
      return `Product: ${this.name}, Price: $${this.price}`;
    }
  }
  
  // Modifying readonly property (will cause error)
  const product = new Product(1, "Laptop", 1000);
  console.log(product.getProductInfo());
  

  export default Product;
  