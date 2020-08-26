function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn )
}