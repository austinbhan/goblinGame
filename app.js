// import functions and grab DOM elements

const goblinName = document.getElementById('goblin-name');
const goblinNameButton = document.getElementById('goblin-name-button');
const activeGoblinsDiv = document.getElementById('active-goblins-div');
const goblinCreation = document.getElementById('goblin-creation');


// let state
let goblins = [{ name: 'Broccoli', health: 5 }];

// set event listeners 

// Goblin Name Button and Append Text

goblinCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = goblinName.value;
    const newGoblin = { name: newName, health: (Math.ceil(Math.random() * 5)) };
    goblins.push(newGoblin);
    console.log(goblins);
});

// Set Pl;





  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
