import { prompt } from "./prompt.js";

function demandeLeNombreDeCaractere() {
  const nbCaracteres = Number(prompt("Nombre de caractères ? (8-36) "));

  if (nbCaracteres >= 8 && nbCaracteres <= 36) {
    return nbCaracteres;
  } else {
    console.log(
      "Le mot de passe doit contenir au minimum 8 et au maximum 36 caractères !"
    );
    return demandeLeNombreDeCaractere(); // Appel récursif
  }
}

function demanderReponseYoN(question) {
  let reponse = prompt(`${question} (y/n) `).toLowerCase();

  while (reponse !== "y" && reponse !== "n") {
    console.log("Réponse invalide !");
    reponse = prompt(
      "Répondez par 'y' pour oui ou 'n' pour non : "
    ).toLowerCase();
  }
  if (reponse === "y") {
    return (reponse = true);
  } else return (reponse = false);
}

function genererMotDePasse(nombreCharacteres, majuscules, speciaux, chiffres) {
  const listeLettres = "abcdefghijklmnopqrstuvwxyz";
  const listeLettresMajuscules = listeLettres.toUpperCase(); // chaine minuscule transformée en majuscule
  const listeChiffres = "1234567890";
  const listeCaracteresSpeciaux = "@&?!%$*#";
  let chaineCaracteres = listeLettres;

  //Condition si l'utilisateur veut des MAJUSCULES
  if (majuscules) {
    chaineCaracteres += listeLettresMajuscules;
  }

  //Condition si l'utilisateur veut des caractères spéciaux
  if (speciaux) {
    chaineCaracteres += listeCaracteresSpeciaux;
  }

  //Condition si l'utilisateur veut des chiffres
  if (chiffres) {
    chaineCaracteres += listeChiffres;
    console.log(chaineCaracteres);
  }

  let result = "";
  const lettresLongueur = chaineCaracteres.length;

  //création aléatoire du mot de passe sur base des infos précentes
  for (let i = 0; i < nombreCharacteres; i++) {
    result += chaineCaracteres.charAt(
      Math.floor(Math.random() * lettresLongueur)
    );
  }
  return result;
}

const nbCaractere = demandeLeNombreDeCaractere();
const caractereSpeciaux = demanderReponseYoN(
  "Souhaitez vous des caractères spéciaux ?"
);
const chiffres = demanderReponseYoN("Souhaitez-vous des chiffres ?");
const majuscules = demanderReponseYoN("Souhaitez-vous des majuscules ?");

const motDePasse = genererMotDePasse(
  nbCaractere,
  majuscules,
  caractereSpeciaux,
  chiffres
);
console.log(motDePasse);
