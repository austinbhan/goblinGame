// import functions and grab DOM elements


const activeGoblinsDiv = document.getElementById('active-goblins-div');
const goblinCreation = document.getElementById('goblin-creation');
const startingHealth = document.getElementById('starting-health');
const defeatedGoblins = document.getElementById('defeated-goblins');

// let state
let goblins = [{ name: 'Broccoli', health: 5 }, { name: 'Carrot', health: 4 }];
let playerHealth = 5;
let goblinKillCounter = 0;

// set event listeners 

// Goblin Name Button and Append Text
displayGoblins();

goblinCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    const formD = new FormData(goblinCreation);
    const goblinName = formD.get('goblin-name');    
    let goblinStats = { name: goblinName, health: (Math.ceil(Math.random() * 5)) };
    goblins.push(goblinStats);
    displayGoblins();
});

function displayGoblins() {
    activeGoblinsDiv.textContent = '';
    for (let goblin of goblins) {
        let button = document.createElement('button');
        button.textContent = `${goblin.name}, ${goblin.health} health`;
        activeGoblinsDiv.append(button);

        button.addEventListener('click', () => {
            gamePlay(goblin);
            // Making Gameplay Function
            // Making Endgame Function
            endGame(goblin);
        });
    }
}

function gamePlay(goblin) {
    let randomNum = Math.ceil(Math.random() * 2);
    if (randomNum === 1) {
        alert(`You hit ${goblin.name}!`);
        goblin.health--;
        displayGoblins();
    } 
    else {
        alert(`You got hit by ${goblin.name}!`);
        playerHealth--;
        startingHealth.textContent = playerHealth;}
}

function endGame(goblin) {
    if (goblin.health === 0) {
        alert(`Oh my god, you killed ${goblin.name}!`);
        goblinKillCounter++;
        defeatedGoblins.textContent = goblinKillCounter;
    } else if (playerHealth === 0){
        alert(`You got killed by ${goblin.name}!`);
    } else displayGoblins();
}