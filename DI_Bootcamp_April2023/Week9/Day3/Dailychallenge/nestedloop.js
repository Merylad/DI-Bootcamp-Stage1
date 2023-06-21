

let sentence = "";

for (i=0; i<6; i++){
    console.log((sentence += "*"));
}


for (index = 0; index < 7; index ++) {
    let pattern = "";
    for (star = 1; star <= index; star ++) {
      pattern += "*";
    }
    console.log(pattern);
  }

