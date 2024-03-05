let rand = Math.random();
let first, second, third;

// This is first word
if (rand < 0.33) {
    first = "Crazy";
}else if (rand < 0.66 && rand >= 0.33) {
    second = "Amazing";
}else{
    third = "Fire";
}

// This is second word
rand = Math.random();
if (rand < 0.33) {
    first = "Engine";
}else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
}else{
    third = "Garments";
}

//This is third word
rand = Math.random();
if (rand < 0.33) {
    first = "Bros";
}else if (rand < 0.66 && rand >= 0.33) {
    second = "Limited";
}else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);