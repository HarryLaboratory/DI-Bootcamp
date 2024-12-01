// Part 1

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const message = `The client wants a ${size} drink juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        
        document.body.innerHTML = message; 
    }

    addIngredients("banana", "apple", "orange");
}

makeJuice("medium");


// Part 2

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);  
    }

    function displayJuice() {
        const message = `The client wants a ${size} drink juice, containing ${ingredients.join(', ')}.`;
        
        document.body.innerHTML = message;  
    }

    addIngredients("banana", "apple", "orange");
    addIngredients("Kiwi", "mango", "pineapple");

    displayJuice();
}

makeJuice("large");
