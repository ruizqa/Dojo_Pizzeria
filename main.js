
let crustTypes;
let sauceTypes;
let Cheeses;
let Toppings;
let n=1;

crustTypes = ["Stuffed", "Cracker", "Flat Bread", "Thin", "Cheese", "Thick"];
sauceTypes = ["Spicy Red", "Peppery Red", "Sweet Pizza", "Pesto Sauce", "Creamy Alfredo Sauce", "BBQ"];
Cheeses = ["Mozzarella", "Cheddar/Matured Cheddar", "Aged Havarti","Gorgonzola","Provolone","Goat cheese"];
Toppings = ["Garlic", "Chili peppers", "Oregano", "Tuna", "Pepperoni","Ham","Pineapple","Mushrooms" ];

ingredients_list = [crustTypes,sauceTypes, Cheeses, Toppings];

getIngredients = function(ingredients_list){
    ingredients = [];

    for (i =0; i< ingredients_list.length; i++){
    
        ingredients.push(ingredients_list[i][Math.floor(Math.random()*ingredients_list[i].length)])
    
    }

    return ingredients;

}



function pizzaOvenRandom(ingredients_list) {
    let ingredients;
    ingredients = getIngredients(ingredients_list);
    var pizza = {};
    pizza.crust = ingredients[0];
    pizza.sauce = ingredients[1];
    pizza.cheeses = ingredients[2];
    pizza.toppings = ingredients[3];
    return pizza;
}


function pizzaOven(crustType, sauceType, cheeses, toppings){

    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;


}


console.log("Pizza "+ n + ": \n");
pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
console.log(pizza1);
n++
console.log("Pizza "+ n + ": \n");
pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
n++

console.log("Let's create two random pizzas!\n")
console.log("Pizza "+ n + ": \n");
pizza3 = pizzaOvenRandom(ingredients_list);
console.log(pizza3);
n++

console.log("Pizza "+ n + ": \n");
pizza4 = pizzaOvenRandom(ingredients_list);
console.log(pizza4);
