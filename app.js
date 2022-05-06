// import functions and grab DOM elements


const activeGoblinsDiv = document.getElementById('active-goblins-div');
const goblinCreation = document.getElementById('goblin-creation');

// let state
let goblins = [{ name: 'Broccoli', health: 5 }, { name: 'Carrot', health: 4 }];

// set event listeners 

// Goblin Name Button and Append Text
displayGoblins();

goblinCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    const formD = new FormData(goblinCreation);
    const goblinName = formD.get('goblin-name');    
    let goblinStats = { name: goblinName, health: (Math.ceil(Math.random() * 5)) };
    goblins.push(goblinStats);
    // Test Console Log 
    console.log(goblins);
    displayGoblins();
});

function displayGoblins() {
    activeGoblinsDiv.textContent = '';
    for (let goblin of goblins) {
        let button = document.createElement('button');
        button.textContent = `${goblin.name}, ${goblin.health}`;
        activeGoblinsDiv.append(button);
    }
}