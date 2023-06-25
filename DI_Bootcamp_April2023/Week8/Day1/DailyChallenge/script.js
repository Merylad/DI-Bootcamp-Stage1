const myForm = document.forms[0];
myForm.addEventListener("submit", getValuesForm);
let madLibsWords=[];

function getValuesForm(event) {
    event.preventDefault();
    const noun = event.target.noun.value;
    const adjective= event.target.adjective.value;
    const person= event.target.person.value;
    const verb= event.target.verb.value;
    const place= event.target.place.value;
    if (noun=='' || adjective=='' || person=='' || verb=='' || place ==''){
        alert ('You need to fill all the form')
    } else{
        madLibsWords = [noun, adjective, person, verb, place];
        }

    console.log(madLibsWords)
    WriteStory()
}

function WriteStory(){
    let sentence = `The ${madLibsWords[1]} ${madLibsWords[0]} wants to ${madLibsWords[3]} ${madLibsWords[2]} in ${madLibsWords[4]}`;
    
    const span = document.querySelector('#story');
    span.append(sentence);

}
