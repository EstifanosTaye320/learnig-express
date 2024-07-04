function add(a, b) {
    return a+b;
}

function minim(a, b) {
    return a - b;
}

function divi(a, b) {
    try {
        let c = a / b;
        return c;
    }catch(e) {
        return "can do that";
    }
}

module.exports = {
    add, minim, divi
}