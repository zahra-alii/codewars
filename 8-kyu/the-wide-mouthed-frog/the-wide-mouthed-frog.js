// SOLUTION 1:
const mouthSize = animal => /alligator/i.test(animal) ? 'small' : 'wide'; 
// used regex + i + .test() method to make the value case insensative

// SOLUTION 2:
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? 'small' : 'wide'; // did the same thing w/ .toLowerCase();
}
