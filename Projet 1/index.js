import { readFileSync } from "fs";
import { parse } from "path";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const nbFish = howManyFish(18, test);
const nbFish2 = howManyFish(256, final);
console.log(nbFish);
console.log(nbFish2);

//fonction complète avec 2 paramètres (le nombre de jour, le fichier de départ)
function howManyFish(days, fishNumberStart) {
  const firstPoissonsLune = fishNumberStart
    .split(",")
    .map((num) => parseInt(num));

  //initialisation du tableau des timers à 0 avec 9 index
  let timerFish = Array(9).fill(0);

  //on compte les occurences de départ
  for (let fish of firstPoissonsLune) {
    timerFish[fish]++;
  }

  // boucle pour simuler les naissances en fonction du nombre de jour
  for (let i = 0; i < days; i++) {
    let newTimerFish = Array(9).fill(0);

    for (let j = 0; j < 9; j++) {
      if (j === 0) {
        newTimerFish[6] += timerFish[0]; // poisson avec un timer de 0 => 6
        newTimerFish[8] += timerFish[0]; // bébé poisson avec un timer de 8
      } else {
        newTimerFish[j - 1] += timerFish[j]; // les autres poissons décrémentent de 1
      }
    }
    timerFish = newTimerFish;
  }
  const totalFish = timerFish.reduce((acc, curr) => acc + curr, 0);
  return totalFish;
}
