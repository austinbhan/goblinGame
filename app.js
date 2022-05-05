// import functions and grab DOM elements
import { randomHealth } from './utils.js';

const goblinName = document.getElementById('goblin-name');
const goblinNameButton = document.getElementById('goblin-name-button');
const activeGoblinsDiv = document.getElementById('active-goblins-div');

const startingHealth = document.getElementById('starting-health');

// let state
let goblinNames = [];
// set event listeners 

// Goblin Name Button and Append Text
goblinNameButton.addEventListener('click', () => {
    let name = `${goblinName.value}: ${randomHealth()} health`;
    goblinNames.push(name);
    displayGoblins();
});
function displayGoblins() {
    activeGoblinsDiv.textContent = '';
    for (let name of goblinNames) {
        const li = document.createElement('li');
        li.textContent = name;
        activeGoblinsDiv.append(li);
    }
}

// Set Player Health



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
