// Iteration 1: Names and Input

const hacker1 = "Guilherme";
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = "Karina";
console.log(`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
   } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
   } else if (hacker1.length === hacker2.length) {
      console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
   } else {
      console("try again");
};


// Iteration 3: Loops

//3.1
let hacker1Capitals = hacker1.toUpperCase();

let hacker1CapitalsSpaced = "";

for (let i = 0; i < hacker1Capitals.length; i++) {

   if (i < hacker1Capitals.length - 1) {
      hacker1CapitalsSpaced += hacker1Capitals[i] + " "
   } else {
      hacker1CapitalsSpaced += hacker1Capitals[i]
   };

};

console.log(hacker1CapitalsSpaced);

//3.2
let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
   hacker2Reverse += hacker2[i]
}

console.log(hacker2Reverse);

//3.3

if (hacker1 < hacker2) {
   console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
   console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
   console.log("What?! You both have the same name?");
}


// Bonus 1

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, enim id lacinia eleifend, dui mi mattis nibh, quis placerat felis nisi quis lectus. Morbi bibendum nisi a massa porttitor, et facilisis sem condimentum. Vivamus vitae facilisis eros. Donec euismod enim ex, eget tincidunt ante molestie quis. Quisque non placerat lacus, non feugiat tortor. Nullam quis commodo velit, nec pretium felis. Cras ut turpis justo. Vivamus convallis vestibulum lobortis. Sed ac aliquam purus, sed egestas leo. Sed ac tristique odio. Praesent commodo neque ac nulla efficitur, id placerat dui viverra. Nam finibus turpis mauris, vitae vulputate eros porttitor vitae. Donec eu nibh facilisis massa dictum eleifend eu et arcu. Proin vitae nulla odio. Donec auctor, quam ut fringilla semper, sapien mi viverra turpis, sed dictum ante risus ac ante. Donec eu placerat purus. Suspendisse tincidunt auctor enim, at tempor libero aliquet ut. Aliquam felis tortor, varius a sapien nec, semper tincidunt purus. Vivamus pharetra laoreet sapien, ut tincidunt mauris elementum ac. Sed mauris dui, suscipit non nibh iaculis, iaculis hendrerit nunc. Etiam quis maximus urna, in suscipit lectus. Mauris blandit, tellus vitae consectetur semper, mauris neque tincidunt ex, eu auctor nisl turpis sit amet urna. Vestibulum vitae erat in metus gravida blandit et dictum enim. Aliquam tincidunt venenatis eleifend. Phasellus porttitor, odio a ultrices hendrerit, nunc risus feugiat lorem, sit amet fermentum libero lectus quis odio. Phasellus vulputate neque sit amet libero hendrerit suscipit. Aenean faucibus varius gravida. Etiam malesuada tempus erat, a ultricies lectus imperdiet ac. Cras ullamcorper massa ac nisi sagittis laoreet. Aenean et bibendum sapien. Duis non suscipit est, in rutrum risus. Pellentesque in lectus vehicula, euismod eros quis, facilisis turpis. Donec a enim vel nunc vehicula laoreet eget id magna. Nullam sed nisi eu nisi suscipit ultricies at eu ipsum. Aliquam leo leo, imperdiet ac luctus nec, efficitur et ante. Quisque id enim id nulla sagittis iaculis in eget ex.";

let wordCounter = 0

for (let i = 0; i < text.length; i++) {
   if (text[i] === " ") {
      wordCounter ++;
   }
};

console.log(wordCounter + 1);

let etCounter = 0;

for (let i = 0; i < text.length; i++) {
   if (text[i] === " " && text[i+1] === "e" && text[i+2] === "t" && text[i+3] === " " ) {
      etCounter += 1;
   }
};

console.log(etCounter);


// Bonus 2

const phraseToCheck = "Was it a car or a cat I saw?";

const lettersString = "abcdefghijklmnopqrstuvwxyz";

const clean = (string) => {

   let phraseLower = string.toLocaleLowerCase()

   let cleanPhrase = "";

   for (let i = 0; i < phraseLower.length; i++) {
      if (lettersString.includes(phraseLower[i])) {
         cleanPhrase += phraseLower[i];
      };
   };

   return cleanPhrase;

}


const isPalindrome = (string) => {

   const cleanPhrase = clean(string);

   for (let i = 0; i < cleanPhrase.length/2; i++) {
      if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
         return false;
      }
   }

   return true;

}

console.log(isPalindrome(phraseToCheck));