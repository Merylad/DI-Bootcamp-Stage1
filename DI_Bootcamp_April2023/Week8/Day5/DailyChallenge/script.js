function AnagramChecker(str1, str2){
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");
    if (str1.length !== str2.length){
        return false
    } else {

        objStr1 = getCharacters(str1);
        objStr2= getCharacters(str2);

        for (let char in objStr1){
            if (objStr1[char] == objStr2[char]){
                return true;
            } else {
                return false;
            }
        }

   }
}

function getCharacters(str){
    let CountObjStr = {};

    for (let char of str){
        if (char in CountObjStr){
            CountObjStr[char] +=1;
        } else{
            CountObjStr[char] = 1;
        }
    }
    return CountObjStr;
}

console.log(AnagramChecker("The Morse Code", "Here come dots"));