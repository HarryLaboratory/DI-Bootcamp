//Exercise 1

//function displayNumbersDivisible() {
//    let sum = 0;
//    let i = 0;

//    while (i <= 500) {
//        console.log(i);  
//        sum += i;        
//        i += 23;         
//    }


//    console.log("Sum:", sum);
//}

//displayNumbersDivisible();

//Exercise 2

//const stock = { 
//    "banana": 6, 
//    "apple": 0,
//    "pear": 12,
//    "orange": 32,
//    "blueberry":1
//}  

//const prices = {    
//    "banana": 4, 
//    "apple": 2, 
//    "pear": 1,
//    "orange": 1.5,
//    "blueberry":10
//} 


//const shoppingList = ["banana", "orange", "apple"];

//function myBill() {
//    let total = 0;
//    
//    for (let item of shoppingList) {
//
//        if (item in stock && stock[item] > 0) {
//            total += prices[item];
//            stock[item] -= 1;
//        } else {
//            console.log(`Sorry, we are out of ${item}.`);
//        }
//    }
//    
//    return total;
//}

//const totalPrice = myBill();
//console.log("Total bill: $" + totalPrice.toFixed(2));


// Exercise 3

//function changeEnough(itemPrice, amountOfChange) {
//    const totalAmount = (amountOfChange[0] * 0.25) + // Quarters
//                        (amountOfChange[1] * 0.10) + // Dimes
//                        (amountOfChange[2] * 0.05) + // Nickels
//                        (amountOfChange[3] * 0.01);  // Pennies
//
//    return totalAmount >= itemPrice;
//}

//console.log(changeEnough(4.25, [25, 20, 5, 0])); 
//console.log(changeEnough(5.00, [1, 0, 0, 0]));   
//console.log(changeEnough(1.00, [4, 0, 2, 1])); 

// Exercise 4

/*function hotelCost() {
    let nights;
    
    while (true) {
        nights = prompt("How many nights would you like to stay at the hotel?");
        
        if (!isNaN(nights) && nights > 0) {
            break;
        } else {
            alert("Please enter a valid number of nights.");
        }
    }
    
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost() {
    let destination;
    
    while (true) {
        destination = prompt("What is your destination?");
        
        if (destination && typeof destination === "string") {
            destination = destination.trim();
            break;
        } else {
            alert("Please enter a valid destination.");
        }
    }

    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    
    while (true) {
        days = prompt("How many days would you like to rent the car?");
        
        if (!isNaN(days) && days > 0) {
            break;
        } else {
            alert("Please enter a valid number of days.");
        }
    }

    const dailyCost = 40;
    let totalCost = days * dailyCost;
    
    if (days > 10) {
        totalCost = totalCost * 0.95;
    }

    return totalCost;
}

function totalVacationCost() {
    
    const hotel = hotelCost();
    const planeTicket = planeRideCost();
    const carRental = rentalCarCost();
   
    const totalCost = hotel + planeTicket + carRental;
    
    console.log(`The car cost: $${carRental}`);
    console.log(`The hotel cost: $${hotel}`);
    console.log(`The plane tickets cost: $${planeTicket}`);
    console.log(`The total vacation cost is: $${totalCost}`);
    
    return totalCost; 
}
*/

