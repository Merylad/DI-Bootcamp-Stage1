// 🌟 Exercise 1 : Comparison

function compareToTen(num){
    const promise = new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (num <= 10) {
                resolve('Good number');
            } else {
                reject('The number is too big');
            }
        }, 1000);
    })
    retrieveResults(promise);
    return promise;
};

function retrieveResults(promise){
    promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

compareToTen(15);
compareToTen(8);

// 🌟 Exercise 2 : Promises

const promise2 = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve('success');
    },4000)
});

promise2.then(result => console.log(result));

// 🌟 Exercise 3 : Resolve & Reject

const promise3 = Promise.resolve(3);
const promise4 = Promise.reject('Boo!');