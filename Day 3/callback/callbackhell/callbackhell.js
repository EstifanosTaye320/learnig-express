function stepOne(callback) {
    setTimeout(() => {
        callback(null, "Step 1 completed");
    }, 1000)
}

function stepTwo(callback) {
    setTimeout(() => {
        callback(null, "Step 2 completed");
    }, 1000)
}

function stepThree(callback) {
    setTimeout(() => {
        callback(null, "Step 3 completed");
    }, 1000)
}

stepOne((err, result) => {
    if(err) return console.log(err);
    console.log(result);
    stepTwo((err, result) => {
        if(err) return console.log(err);
        console.log(result);
        stepThree((err, result) => {
            if(err) return console.log(err);
            console.log(result);
            
        })
    })
})