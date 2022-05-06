// import functions and grab DOM elements

const goblinName = document.getElementById('goblin-name');
const goblinNameButton = document.getElementById('goblin-name-button');
const activeGoblinsDiv = document.getElementById('active-goblins-div');


// let state
let goblins = [{ name: 'Broccoli', health: `${randomHealth}` }];
let goblinHealth = Math.ceil(Math.random() * 5);
console.log(goblinHealth);
// set event listeners 

// Goblin Name Button and Append Text
goblinNameButton.addEventListener('click', () => {
    let goblinStat = {
        name: goblinName.value,
        health: randomHealth,
    };
    goblins.push(goblinStat);
    displayGoblins();
});
`function displayGoblins() {
    activeGoblinsDiv.textContent = '';
    for (let name of goblins) {
        const li = document.createElement('li');
        li.textContent = name;
        activeGoblinsDiv.append(li);
    }
}`

// Set Player Health



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
