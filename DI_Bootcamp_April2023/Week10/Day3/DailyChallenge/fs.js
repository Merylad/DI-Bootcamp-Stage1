const fs = require('fs');

function getData(){
try{
    const data= fs.readFileSync("RightLeft.txt", "utf-8");

    const arrayData = Array.from(data)
    return arrayData
    
} catch(err){
    console.log(err)
}
}

// let total = 0
// arrayData = getData()
// arrayData.forEach(element => {
//     if (element === '>'){
//         total +=1
//     } else{
//         total -=1
//     }
// });

// console.log('total steps: ',total)


let total = 0
arrayData = getData()
let newArrayData = []
try {
    arrayData.forEach(element => {
        if (element === '>'){
            total +=1
            newArrayData.push(element)
        } else{
            total -=1
            newArrayData.push(element)
        }
        if (total == -1){
            throw BreakException;
        }
    });
} catch (e){
    console.log ('total steps: ', total)
    console.log('total steps needed to reach -1: ',newArrayData.length)
}

