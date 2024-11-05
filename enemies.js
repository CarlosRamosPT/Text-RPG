const displayScreen = document.getElementById('display');

//Enemies table with theyre initial stats
const enemies = [
  { name: "Goblin", hp: 3, monsterId: 1 },
  { name: "Golem", hp: 5, monsterId: 2 },
  { name: "Orc", hp: 4, monsterId: 3 },
];

// Function to randomly encounter a monster
function monsterEncounter() {
  // Use Math.random() to generate a random number between 0 and 1
  // Multiply it by the length of the enemies array to scale it to the correct range
  // Math.floor() rounds the result down to the nearest whole number, giving a valid array index
  const randomIndex = Math.floor(Math.random() * enemies.length);

  // Select the monster at the random index in the enemies array
  const monsterFound = enemies[randomIndex];

  // Log the details of the encountered monster (its name and HP)
  // console.log(
  //   `You have encountered a ${monsterFound.name} with ${monsterFound.hp} HP!`,
  // );

  // Optionally return the encountered monster, so the result can be used later in the game logic
  return monsterFound;
}

// Call the function to simulate an encounter
export const monsterFound = monsterEncounter();

export function currentFight() {
  const monsterFoundName = monsterFound.name;
  let monsterFoundHp = monsterFound.hp;
  const message =
    `You have defeated the : ${monsterFoundName}, Congratulations you might move to the next monster.`;

  while (monsterFoundHp > 0) {
    const current_attack = Math.floor(Math.random() * 4);
    if (current_attack == 3) {
      monsterFoundHp -= 3;
      setTimeout(() => {displayScreen.value = ("You have greatly damaged the enemy")},500);
      setTimeout(() => {displayScreen.value += (`Your current enemy health is ${monsterFoundHp}`)},500);
    } else if (current_attack == 2) {
      monsterFoundHp -= 2;
      setTimeout(() => {displayScreen.value = (
        "You did a moderate damage to the enemy although it was not your greatest impact!"
      );
      displayScreen.value += (`Your current enemy health is ${monsterFoundHp}`)},500);
    } else if (current_attack == 1) {
      monsterFoundHp -= 1;
      setTimeout(() => {displayScreen.value = (
        "You barely scrapped the enemy!" +
          "\n Come on you can do better than that"
      );
      displayScreen.value += (`Your current enemy health is ${monsterFoundHp}`)},500);
    } else {
      monsterFoundHp -= 0;
      setTimeout(() => {displayScreen.value = (
        "You don't do nothing to the enemy it stands laughing at you."
      );
      displayScreen.value += (`Your current enemy health is ${monsterFoundHp}`)},500);
    }
    // break;
  }
  setTimeout(() => {displayScreen.value = (message)},3000);
};
