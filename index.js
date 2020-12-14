const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        
        setTimeout(() => {
            if (passed) {
        resolve('Hi this is resolve');
    }

    reject('everything is bad');

        }, 2000);
   
});
};

makePromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));