let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; 
    console.log("client:", client); 
    console.log("user:", user); // This Will still log "John" because it's a primitive value.

    let shopping = groceries;
    
    shopping.totalPrice = "35$"; 
    console.log("shopping.totalPrice:", shopping.totalPrice); 
    console.log("groceries.totalPrice:", groceries.totalPrice); // This Will also log "35$" because it's by reference.

    shopping.other.paid = false;
    console.log("shopping.other.paid:", shopping.other.paid); 
    console.log("groceries.other.paid:", groceries.other.paid); // Like before, this Will also log false because it's by reference.
};

displayGroceries(); 
cloneGroceries(); 
