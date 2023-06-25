const myForm = document.forms[0];

const radiusInput = document.querySelector("#radius");
radiusInput.addEventListener("input", retrieveData);

function retrieveData(event) {
    event.preventDefault();
    const userRadius = event.target.value;
    const sphereVolume = calculateVolume(userRadius);
    displayVolume(sphereVolume);
}

function calculateVolume(userRadius){
    const sphereVolume = (4/3)*3.14*(userRadius)**2;
    return sphereVolume;
}

function displayVolume(sphereVolume){
    const inputVolume = document.querySelector("#volume");
    inputVolume.value = sphereVolume;
}