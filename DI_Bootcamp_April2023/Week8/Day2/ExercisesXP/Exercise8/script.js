// Part 1

// function makeJuice(size){

//     function addIngredients (ingredient1,ingredient2,ingredient3){
//         const div = document.querySelector('#juice');
//         const text = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
//         const textNode = document.createTextNode(text);
//         div.append(textNode);
//     }

//     addIngredients('apple', 'strawberry', 'orange');
// }

// makeJuice('large');

// Part 2

function makeJuice(size){

    let ingredients = []

    function addIngredients (ingredient1,ingredient2,ingredient3){
        ingredients.push(ingredient1 ,ingredient2 ,ingredient3);
    }

    function displayJuice (){
        let text = `The client wants a ${size} juice, containing `;
        for (let ing of ingredients){
            if (ing === ingredients[ingredients.length -1]){
                 text += ` ${ing}.`
            } else{
                text += ` ${ing},` ;
                }
        }
        const div = document.querySelector('#juice');
        const textNode = document.createTextNode(text);
        div.append(textNode);

    }

    addIngredients('apple', 'strawberry', 'orange');
    addIngredients('coco', 'pineapple', 'pear');
    displayJuice ()
}

makeJuice('large');

// The client wants a large juice, containing apple, strawberry, orange, coco, pineapple, pear.

