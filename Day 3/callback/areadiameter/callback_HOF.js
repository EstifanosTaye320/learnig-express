const radius = [1, 2, 3];

function areacallback(rad) {
    return rad*rad*3.14;
}

function diametercallback(rad) {
    return rad*2;
}

function calculatorHOF(radius, callback) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(callback(radius[i]));
    }
    console.log(output);
}

calculatorHOF(radius, areacallback);
calculatorHOF(radius, diametercallback);