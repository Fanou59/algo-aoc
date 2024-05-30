import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const firstPoissonsLune = final.split(",").map((num) => parseInt(num));

//initialise le tableau des timers
let timerFish = Array(9).fill(0);

//on compte les occurences de départ
for (let fish of firstPoissonsLune) {
  timerFish[fish]++;
}

const nbJour = 256;

//boucle pour simuler le nombre de jour demandé
for (let i = 0; i < nbJour; i++) {
  let newTimerFish = Array(9).fill(0); // tableau de mise à jour du timer

  // changement de l'état des poissons
  for (let j = 0; j < 9; j++) {
    if (j === 0) {
      newTimerFish[6] += timerFish[0]; //poisson avec un timer 0 => 6
      newTimerFish[8] += timerFish[0]; // bébé poisson avec un timer de 8
    } else {
      newTimerFish[j - 1] += timerFish[j]; // les autres poissons décrémentent de 1
    }
  }
  timerFish = newTimerFish;
}
const totalFish = timerFish.reduce((acc, curr) => acc + curr, 0);

console.log(
  `Il va y avoir un total de ${totalFish} poissons au bout de ${nbJour} jours`
);
