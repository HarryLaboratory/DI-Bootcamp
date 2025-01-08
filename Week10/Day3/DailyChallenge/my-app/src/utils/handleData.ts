// To define the types for User, Product, and Order
export type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  export type Product = {
    type: 'product';
    id: number;
    price: number;
  };
  
  export type Order = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  // For identifying User objects
  function isUser(data: User | Product | Order): data is User {
    return data.type === 'user';
  }
  
  // For identifying Product objects
  function isProduct(data: User | Product | Order): data is Product {
    return data.type === 'product';
  }
  
  // For identifying Order objects
  function isOrder(data: User | Product | Order): data is Order {
    return data.type === 'order';
  }
  
  // To handle the mixed data array
  export function handleData(items: (User | Product | Order)[]): string[] {
    return items.map(item => {
      if (isUser(item)) {
        return `Hello, ${item.name}! You are ${item.age} years old.`;
      } else if (isProduct(item)) {
        return `Product ID: ${item.id}, Price: $${item.price}`;
      } else if (isOrder(item)) {
        return `Order ID: ${item.orderId}, Amount: $${item.amount}`;
      } else {
        return 'Unknown type of data';
      }
    });
  }
  