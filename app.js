// import functions and grab DOM elements

const goblinName = document.getElementById('goblin-name');
const activeGoblinsDiv = document.getElementById('active-goblins-div');
const goblinCreation = document.getElementById('goblin-creation');


// let state
let goblins = [];
let playerHealth = 10;

// set event listeners 

// Goblin Name Button and Append Text

goblinCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = goblinName.value;
    let newGoblin = { name: newName, health: (Math.ceil(Math.random() * 5)) };
    goblins.push(`Goblin Name: ${newGoblin.name}, Goblin Health: ${newGoblin.health}`);
    displayGoblins();
});
function displayGoblins() {
    activeGoblinsDiv.textContent = '';
    for (let goblin of goblins) {
        let li = document.createElement('li');
        li.textContent = goblin;
        activeGoblinsDiv.append(li);
    }
}

