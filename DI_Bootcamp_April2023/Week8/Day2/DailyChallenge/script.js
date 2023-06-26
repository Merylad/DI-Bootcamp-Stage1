let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () =>{
    groceries.fruits.forEach(function(element){
        console.log(element);
    })
}

displayGroceries()

const cloneGroceries = () => {
    let user = client
    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? YES BC USER AND CLIENT HAS THE SAME VALUE

    let shopping = groceries;
    shopping.totalPrice = '35$'
    // Will we also see this modification in the shopping object ? Why ? YES BC SHOPPING AND GROCERIES HAS THE SAME ADDRESS SINCE IT IS PASSED BU REFERENCE
    shopping.other.payed = 'false';

    console.log (groceries);
    console.log(shopping);
}

cloneGroceries()


