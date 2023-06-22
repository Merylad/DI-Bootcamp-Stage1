// 🌟 Exercise 1 : Find The Numbers Divisible By 23

function displayNumbersDivisible(divisor){
    let NumbersDivisibleBy = []
    for (i=0; i<=500; i++){
        if (i%divisor ===0){
           
            NumbersDivisibleBy.push(i);
        }    
    }
    console.log(`Numbers divisible by ${divisor} : ${NumbersDivisibleBy}`)
    let sum = 0;

    for (let num in NumbersDivisibleBy){
        sum = sum + NumbersDivisibleBy[num];
    }
    console.log(`Sum of the numbers: ${sum}`);
    
}

// displayNumbersDivisible(13);

// 🌟 Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ['banana', 'apple', 'orange'];

function myBill(){
    let price = 0;
    for (let item in shoppingList){
        let fruit = shoppingList[item]
        if ( fruit in stock && stock[fruit]>0){
            price = price + prices[fruit];
            stock[fruit]--; 
        }
    }
    return price;
}

const bill = myBill();
// console.log('This list will cost you', bill);
// console.log('updated stock', stock)

// Exercise 3 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange){
    let quarters = amountOfChange[0]*0.25;
    let dimes = amountOfChange[1]*0.10;
    let nickels = amountOfChange[2]*0.05;
    let pennies = amountOfChange[3]*0.01;

    let total = quarters + dimes + nickels + pennies;

    if (total > itemPrice){
        return true;
    } else {
        return false;
    }
}

// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2,100,0,0]) );
// console.log(changeEnough(0.75, [0,0,20,5]));

// 🌟 Exercise 4 : Vacations Costs

function hotelCost(){
    while (true){
       const numNights =  parseInt(prompt('How many times do you plan to stay ?'));
       if (!isNaN(numNights)) {
        let price = numNights*140 ;
        return price;
        } else {
        alert("Please enter a number.");
      }
    }

}

function planeRideCost(){
    while (true){
        const destination = prompt("Where do you want to go ?").toLowerCase();
        if (/\d/.test(destination)){
            alert ("The destination should only contain letters");
        }else if (destination.trim() === ""){
            alert ("You need to anwser");
        }else {
            let price = 0
            if (destination ==="london"){
                price = 183;
            } else if (destination ==='paris'){
                price = 220;
            } else {
                price = 300;
            }
            return price

        }
    }
}

function rentalCarCost(){
    while (true){
        const numDays =  parseInt(prompt('How many times do you plan to keep the car ?'));
        let price = 0;
        if (!isNaN(numDays)){
            if (0 < numDays && numDays <= 10){
                price = numDays*40;
            } else {
                price = numDays*40*0.95;
            }
            return price;

        } else {
            alert("Please enter a number.");
        }

    }
}

function totalVacationCost(){
    const hotelPrice = hotelCost();
    const planePrice = planeRideCost();
    const rentalCarPrice = rentalCarCost();

    const totalPrice = hotelPrice + planePrice+ rentalCarPrice;

    return totalPrice;
}


// console.log(totalVacationCost());

