
let beerNumber = parseInt(prompt ('Write a number'));

if (!isNaN(beerNumber)) {
    beerSong (beerNumber);
} else {
    alert ('This is not a number');
}

function beerSong (beerNumber) {
    let toRemove = 1;
    let pronoun = "";
    
    while (beerNumber>0) {
        if (toRemove === 1) {
            pronoun = 'it';
        } else {
            pronoun = 'them';
        }      


        let sentence = `${beerNumber} bottles of beer on the wall \n${beerNumber} bottles of beer \nTake ${toRemove} down, pass ${pronoun} around\n`;

        beerNumber = beerNumber - toRemove;

        console.log (sentence);        
        
        if (beerNumber> 0) {
            sentence = `${beerNumber} bottles of beer on the wall\n \n`;
            console.log (sentence);
        } else {
            console.log ('No bottle of beer on the wall')
        }

        toRemove ++

        


    }
}
