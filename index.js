// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    let thankYou = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    cards[i] = thankYou;
  }
  return cards;
}
function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
}
