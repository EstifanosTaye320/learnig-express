function callbackFunction() {
    console.log("i am a callback function");
}

function higherorderfunction(fun) {
    console.log("i am a higherorderfunction");
    fun();
}

higherorderfunction(callbackFunction);