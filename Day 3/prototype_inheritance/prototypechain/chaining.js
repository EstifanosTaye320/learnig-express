const arr = [1,2,3];

let proto = Object.getPrototypeOf(arr);
while (proto != null) {
    console.log(proto);
    proto = Object.getPrototypeOf(proto)
}
console.log(proto)