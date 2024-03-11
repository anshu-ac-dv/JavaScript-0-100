let array = [1, 13, 5, 7, 11];
let newAr = []

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newAr.push(element**2);
}
console.log(newAr);

let newArr = array.map((e, index, array)=>{
    return e**2;
})
console.log(newArr);

const greaterThanSeven =  (e)=>{
    if (e>7) {
        return true;
    }
    else{
        return false;
    }
}
console.log(array.filter(greaterThanSeven));

let arr2 = [1,2,3,4,5,6];
const red = (a,b) =>{
    return a*b;
}
console.log(arr2.reduce(red));

Array.from("Anshu");
