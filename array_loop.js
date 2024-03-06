let array = [1, 93, 5, 6, 88];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

array.forEach((value, index, array) => {
    console.log(value, index, array);
});

let object = {
    a : 1,
    b : 2,
    c : 3
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}

for (const value of array) {
    console.log(value);
}