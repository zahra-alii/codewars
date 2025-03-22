function howMuchILoveYou(nbPetals) {
  let phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]
  let index = nbPetals % 6 - 1;
  if(index === -1){
    index = phrases.length - 1;
    }
  return phrases[index];
}
​