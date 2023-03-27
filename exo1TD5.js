1)

function min_majv1(str1) {
  return str1
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Test de la fonction avec la chaîne de caractères donnée
document.write(min_majv1("wELCome pRenOm NoM "));



2)

function freqvoyelles(str1) {
  const voyelles = ['a', 'e', 'i', 'u', 'y'];
  let str = str1.toLowerCase();
  let compteurVoyelles = {};

  for (let i = 0; i < voyelles.length; i++) {
    let compteur = 0;
    for (let j = 0; j < str.length; j++) {
      if (str.charAt(j) === voyelles[i]) {
        compteur++;
      }
    }
    compteurVoyelles[voyelles[i]] = compteur;
  }
  
  return compteurVoyelles;
}

