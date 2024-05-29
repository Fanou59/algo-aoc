import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

// 1- transformer le fichier test en un tableau
// 2- parcourir le tableau
// 3- on doit prendre chaque entrée du tableau et décrementer de 1 le chiffre à l'index

const firstPoissonsLune = final.split(",").map((num) => parseInt(num));
console.log(firstPoissonsLune);
const nbJour = 80;

//boucle pour simuler le nombre de jour demandé
for (let i = 0; i < nbJour; i++) {
  let newPoisson = []; //tableau des nouveaux poissons lune (si un poisson tombe à 0, j'ajoute un nouveau poisson)

  //parcour du tableau des poissons lune
  for (let j = 0; j < firstPoissonsLune.length; j++) {
    //vérification si un poisson est à 0 (si oui il passe à 6 et ajoute un bébé poisson, sinon on décrémente de 1)
    if (firstPoissonsLune[j] === 0) {
      firstPoissonsLune[j] = 6;
      newPoisson.push(8);
    } else {
      firstPoissonsLune[j]--;
    }
  }

  //on vient mettre les bébés dans le tableau initial des poissons
  firstPoissonsLune.push(...newPoisson);
  console.log(`Jour ${i + 1} ${firstPoissonsLune}`);
}
console.log(
  `Il y aura ${firstPoissonsLune.length} poissons lanternes dans ${nbJour} jours.`
);
