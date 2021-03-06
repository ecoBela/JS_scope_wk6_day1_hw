// #### Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Output: 'The murderer is Miss Scarlet' 
//Reason: the declareMurderer function returns a string and includes the value stored 
// in the scenario object specifically in scenario.murderer - which is Miss Scarlet). 
// This is all stored in the const variable called verdict when declareMurderer() is called. 
// Finally, console.log is called with the verdict variable as an argument.


// #### Episode 2


const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();//Output & reason: there will be an error msg as this function tries to reassign a variable
//which has been declared using the const keyword.  You can't reassign a const variable.
const verdict = declareMurderer();
console.log(verdict);
//Output: The murderer is Professor Plum.
//Reason: The function stored at const variable declareMurderer returns a string and
// the const murderer variable which is set to Professor Plum.  



// #### Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
//Output: The murderer is Mrs Peacock
// Reason: the function in declareMurderer succeeds in changing the murderer name because
//the murderer name is stored in a variable declared using the 'let' keyword - which means 
//that the variable can be reassigned.

const secondVerdict = `The murderer is ${murderer}.`;//This variable cannot access the changed variable inside the declareMurderer function.
console.log('Second Verdict: ', secondVerdict);
//Output: The murderer is Professor Plum
//Reason: const secondVerdict references the murderer variable outside the declareMurderer function.
// const declareMurderer creates a new temporary variable that cannot be accessed from outside that function.




//#### Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// Output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//Reason: 'let' variables can be reassigned which is what happens to suspectThree within declareAllSuspects().
console.log(`Suspect three is ${suspectThree}.`);
// Output: Suspect three is Mrs Peacock
// Reason: This console log cannot access the changed let variable inside the declareAllSuspects function, but
// can access the variables at the top of this section.


//#### Episode 5


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
//OUtput: should expect the weapon key in the scenario object to successfully update with a new value: Revolver.
//Reason: this works because the function is not trying to reassign the scenario object variable- it is 
//only making changes to a value within the object.
const verdict = declareWeapon();
console.log(verdict);
// Output: The weapon is the Revolver.
//Reason: the scenario object variable is successfully changed by changeWeapon(), and the declareWeapon() can access that object.


//#### Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); //Output: calling plottwist reassigns the murderer variable to "Mrs White"

const verdict = declareMurderer(); 
//Output: The murderer is Mrs White
//Reason: declareMurderer()'s return value contains the murderer value; The murderer variable is 
//reassigned to Mrs White when plottwist() is called within changeMurderer()
console.log(verdict);


//#### Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


//#### Episode 8


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);




//#### Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
