const radius = [1, 2, 3];

function area(radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(radius[i] * radius[i] * 3.14);
    }
    console.log(output);
}

function diameter(radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(radius[i] * 2);
    }
    console.log(output);
}

area(radius);
diameter(radius);