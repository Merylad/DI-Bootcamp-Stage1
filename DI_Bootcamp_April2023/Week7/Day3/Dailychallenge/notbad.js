const sentence = 'This movie is not so bad !'  ;

let wordNot = sentence.indexOf('not');
console.log(wordNot);

let wordBad = sentence.indexOf('bad');
console.log(wordBad);


if (wordNot ===-1){
    console.log(sentence);
} else if (wordBad > wordNot){
    const firstPart = sentence.slice(0, wordNot);
    const secondPart = sentence.slice(wordBad + 3);  
    console.log(firstPart + 'good' + secondPart);
} else {
    console.log(sentence);
}


