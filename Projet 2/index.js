import { prompt } from "./prompt.js";

/** 4 questions
 *  NB de caractères (8 - 36) -> vérifier que le numbre entré est de type number
 *  Caractères Spéciaux (y/n)
 *  Chiffres (y/n)
 *  Majuscules (y/n)
 */

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

  return reponse;
}

const nbCaractere = demandeLeNombreDeCaractere();
const caractereSpeciaux = demanderReponseYoN(
  "Souhaitez vous des caractères spéciaux ?"
);
const chiffres = demanderReponseYoN("Souhaitez-vous des chiffres ?");
const majuscules = demanderReponseYoN("Souhaitez-vous des majuscules ?");

/** Génération du mot de passe
 *  On va devoir prendre en compte les réponses aux questions
 *  => proposer ou non des caractères spéciaux (fonction random des caractères spéciaux)
 *      -> créer la liste des caractères spéciaux
 *  => proposer ou non des chiffres (entre 0 et 9) (Math.random()/Math.floor() pour un nombre entier)
 *  => proposer ou non des majuscules (entre A et Z)
 *  => tout cela dans une longueur demandée par l'utilisateur
 *      -> création d'une chaine de caractère en fonction de cette longueur
 *
 *  + dans la même fonction on va avoir les majuscules, les caractères spéciaux et les chiffres
 */

//génération d'un chiffre entre 0 et 9
//const chiffresRandom = Math.floor(Math.random() * 10);

function generateurMotDePasse(
  nbCaractere,
  caractereSpeciaux,
  chiffre,
  majuscules
) {}
