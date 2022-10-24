
// You need to have a list of items on the page to select from. 
// When you click on the “add item” button, this item should be added to your shopping list. 
// Create array(s) to track the items that were added. Either:
// Create two parallel arrays: one for the names and one for the corresponding prices, or
// Create one array containing objects where each object includes the name and price.
// Loop through the arrays, printing out the name and price of each item on a new line.
// Total up the combined cost of all of your items with the amount’s label being “total.”

// Hints
// In JavaScript, arrays are enclosed in square brackets. [ ]
// Remember to keep track of the total of all the prices and print this separately.
// To keep it simple at first, consider displaying your output in an alert box.  
// When that’s working, display it in the console.

class Product {
    constructor(name, price, itemNumber) {
        this.name = name;
        this.price = price;
        this.itemNumber = itemNumber;
    }
    CountryDetails(){
        console.log(`Product: ${this.name}\nitemNumber: ${this.itemNumber}`);
    }
}

let chips = new Product("Chips", 2.99, 101);
let chocolate = new Product("Snickers", 1.05, 102);
let soda = new Product("Pop", 0.99, 103);