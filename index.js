const makePromise = () => {
    return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    if (passed) {
        resolve('Hi this is resolve');
    }

    reject('everything is bad');
});
};

makePromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));