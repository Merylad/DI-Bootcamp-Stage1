

let sentence = "";

for (i=0; i<6; i++){
    console.log((sentence += "*"));
}


for (index = 0; index < 7; index += 1) {
    let pattern = "";
    for (star = 1; star <= index; star += 1) {
      pattern += "*";
    }
    console.log(pattern);
  }

