function getCarHonda(carInventory){
    const foundCar = carInventory.find((element)=>{
        return element.car_make == 'Honda';
    })
    if (foundCar){
        return `This is a ${foundCar.car_make} ${foundCar.car_model} from ${foundCar.car_year}.`;
        } else {
        return 'No Honda cars';
        }
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

console.log(getCarHonda(inventory));

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.

function sortCarInventoryByYear(carInventory){
    carInventory.sort((a,b)=>a.car_year-b.car_year);
}

sortCarInventoryByYear(inventory);
console.log(inventory);