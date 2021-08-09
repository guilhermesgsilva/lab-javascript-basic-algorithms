// Iteration 1: Names and Input

const hacker1 = "Guilherme";
console.log(`The drivers name is ${hacker1}.`)

const hacker2 = "Guilherma";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

 if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
 } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
 } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
 } else {
    console("try again");
 };

// Iteration 3: Loops


let hacker1Capitals = hacker1.toUpperCase()

console.log(hacker1Capitals);

let hacker1SeparatedCapitals = "";

for (let i = 0; i < hacker1Capitals.length; i++) {
    hacker1SeparatedCapitals = hacker1SeparatedCapitals + hacker1Capitals[i] + " ";
};

console.log(hacker1SeparatedCapitals);


let hacker2Backwards = "";
for (let i = hacker2.length - 1; i>=0; i--) {
    hacker2Backwards = hacker2Backwards + hacker2[i];
}

console.log(hacker2Backwards);


if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
 } else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
 } else {
    console.log(`What?! You both have the same name?`);
 };

 // Bonus 1

 let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis, lacus nec varius ultrices, urna nisi commodo ante, euismod facilisis tortor turpis sed lorem. Quisque commodo massa ut condimentum vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis enim sapien, mattis dignissim ligula quis, gravida ultrices mi. Curabitur faucibus vestibulum bibendum. Curabitur ante ligula, ultricies in fringilla at, facilisis id nisi. Quisque sagittis nunc nisl. Donec mollis ex vitae faucibus sollicitudin. Duis nec erat ut risus dignissim venenatis eget a tellus. Fusce aliquet velit dolor, non maximus ligula fringilla nec. In sollicitudin ante eget scelerisque consequat. Nunc suscipit sem et tempus placerat. Nam purus diam, ultricies eget luctus at, blandit non elit. Ut non efficitur neque. Duis pretium mi urna, placerat ullamcorper est vestibulum at. Donec imperdiet neque quis tincidunt maximus. Curabitur felis turpis, vulputate id ante id, varius posuere leo. Morbi eu placerat nulla, non consectetur velit. Ut non ipsum hendrerit, laoreet erat quis, gravida velit. Nullam tincidunt elit consequat sapien hendrerit faucibus. Etiam a ante luctus, varius eros a, sollicitudin libero. Nam malesuada placerat elit, in porttitor eros interdum et. Donec sit amet metus velit. Etiam luctus lobortis metus, vitae euismod elit finibus sit amet. Aliquam libero velit, molestie sed dapibus in, posuere ut erat. Praesent sed aliquet lectus, sed efficitur turpis. Praesent id sem non magna elementum congue. Nulla aliquam orci in efficitur auctor. Suspendisse potenti. Maecenas lobortis in libero a ornare.";

 let numberOfWords = 0;

 for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        numberOfWords ++
     } else {
        continue;
     };
};

console.log(numberOfWords + 1);


let numberOfEt = 0;

for (let i = 0; i < text.length; i++) {
    if ((text[i -1] !== "a" - "z" || text[i -1] !== "A" - "Z") && ((text[i] === "e" && text[i + 1] === "t") || (text[i] === "E" && text[i + 1] === "t")) && (text[i + 2] !== "a" - "z" || text[i + 2] !== "A" - "Z") ) {
        numberOfEt ++
     } else {
        continue;
     };
};

console.log(numberOfEt);