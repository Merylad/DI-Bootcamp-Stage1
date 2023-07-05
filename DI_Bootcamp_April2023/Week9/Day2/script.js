// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

function funOne (data) {
    const promise = new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (typeof data ===string) {
                resolve(data.toUpperCase())
            } else {
                reject(data)
            }
        }, 5000)
    })
    return promise;
}

