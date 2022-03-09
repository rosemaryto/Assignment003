let coinFlip;
let numTries = parseInt(prompt('How many times do you want to play?'));
for (let i = 0; i < numTries; i++) {
   coinFlip = Math.round(Math.random()); 
   if (coinFlip < 1) {
       console.log('heads');
   } else {
       console.log('tails');
   }
}
