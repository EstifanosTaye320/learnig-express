function fetchdata(callback) {
    setTimeout(() => {
        data = {id: 1, name: "Estif", pet: "cat", otherpet: "dog"};
        callback(data);
    }, 3000);
}

function handledata(data) {
    console.log(data.id);
    console.log(data.name);
    console.log(data.pet);
    console.log(data.otherpet);
}

fetchdata(handledata);