import {monsterFound} from "./enemies.js";
import {currentFight} from "./enemies.js";



// Functions to start

function powerOn(){
  let isOn;
  if(displayScreen.style.visibility === "hidden"){
    displayScreen.style.visibility = "visible";
    displayScreen.value = '';
    isOn = "true";

    return isOn;
  }
  else{
    displayScreen.style.visibility = "hidden";
    isOn = "false";
    return isOn;
  }

};



let isOn = () => {
  if (displayScreen.style.visibility === "visible") {
    start();
  } else {
  }
};



const displayScreen = document.getElementById('display');

function addEventListenerToButton(buttonId, eventType, callback) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener(eventType, callback);
    }
}

addEventListenerToButton('start', 'click', isOn);

// Yes button
addEventListenerToButton('yes', 'click', () => {
  // For the current state execute the operation neded
  switch (state) {
    case 'charName':
      setTimeout(() => {displayScreen.value = ("Good we will be proceeding with this one!")},2000)
      state = 'adventureStarts'
      return adventureStarts()
    case 'fightQuestion':
      setTimeout(() => {displayScreen.value = ("Start fight")},500)
      return currentFight()
    case 'quit':
        displayScreen.value = ("ok Thank you for playing.")
        setTimeout(() =>  {displayScreen.style.visibility = "hidden"}, 3000)
        return;

  }
});

// No button
addEventListenerToButton('no', 'click', () => {
  // For the current state execute the operation neded
  switch (state) {
    case 'charName':
      setTimeout(() => {displayScreen.value = ("Then re enter again the name that you would like")},2000);
      return charName();
    case 'fightQuestion':
      // console.log("You ran away for the hills!")
      setTimeout(() => {displayScreen.innerHTML = ("You ran away for the hills!")},2000);
      return quit();
    case 'quit':
      setTimeout(() => {displayScreen.value = ("Good let's try again then!")},2000);
        return adventureStarts();
      
  }
});
addEventListenerToButton('power', 'click', powerOn);


let characterName;
let state;



// Start the adventure, sets div text and set game state
function adventureStarts() {
  // displayScreen.value =  `You have encountered a ${monsterFound.name} with ${monsterFound.hp} HP!`
  setTimeout(() => {displayScreen.value = (`You have encountered a ${monsterFound.name} with ${monsterFound.hp} HP! `)}, 3000)

  setTimeout(() => {displayScreen.value += (" Do you wish to fight it?")},3000);
  console.log("Do you wish to fight it?")

  state = "fightQuestion"
}



function start() {
  if(!characterName){
    setTimeout(() => {displayScreen.value = ("You need to get a character name first!")},500)
    setTimeout(() => {charName()},500);
  } else {
    setTimeout(() => {displayScreen.value = (`Hello how are you? \n ${characterName} you ready for an aventure today?`)},3000)
  adventureStarts();
  };
};


function quit() {
  displayScreen.value = ("Do you want to quit?")
  state = "quit" // set the current game status
}





// Set the charName for the player
function charName() {
  setTimeout(() => {characterName = prompt("What is your character name?", "john Doe")}, 500);
  setTimeout(() => {displayScreen.value = `Are you sure you want to keep this name? (${characterName})`},1000);
  state = "charName" // Set current game status
};



