let object = {
    name : "Anshu",
    role : "Programmer",
    company : "Google"
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}

for (const key in object) {
        console.log(key);
}