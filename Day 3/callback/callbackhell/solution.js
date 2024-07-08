function fetchdata() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({id: 1, name: "estif", pet: "cat", otherpet: 'dog'});
        }, 2000);
        setTimeout(() => {
            rej(new SyntaxError);
        }, 3000)
    })
}

// first option
fetchdata().then((data) => {
    console.log("this is the data " + "{" + `id: ${data.id}, name: ${data.name}, pet: ${data.pet}, otherpet: ${data.otherpet}` + "}");
}).catch(err => {
    console.log("this is the error " + err);
})

// second option
async function main() {
    try {
        const data = await fetchdata();
        console.log("this is the data " + "{" + `id: ${data.id}, name: ${data.name}, pet: ${data.pet}, otherpet: ${data.otherpet}` + "}")
    }catch(err) {
        console.log("this is the error: " + err)
    }
}

main();
