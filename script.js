function analyzeSentence(sentence) {
    // Initialisation des compteurs
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Liste des voyelles pour la vérification
    const vowels = 'aeiouAEIOU';

    // Parcours de chaque caractère de la phrase
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Incrémenter le compteur de longueur
        length++;

        // Vérifier si le caractère est une voyelle
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Vérifier si le caractère est un espace (fin d'un mot)
        if (char === ' ') {
            // Assurer qu'il y a un seul espace entre les mots
            if (i > 0 && sentence[i - 1] !== ' ') {
                wordCount++;
            }
        }
    }

    // Ajouter le dernier mot si la phrase ne se termine pas par un espace
    if (sentence.trim().slice(-1) !== '.') {
        wordCount++;
    }

    // Retourner les résultats
    return { length, wordCount, vowelCount };
}

// Exemple d'utilisation
const sentence = "Ceci est une phrase simple.";
const { length, wordCount, vowelCount } = analyzeSentence(sentence);

console.log(`Longueur de la phrase : ${length}`);
console.log(`Nombre de mots dans la phrase : ${wordCount}`);
console.log(`Nombre de voyelles dans la phrase : ${vowelCount}`);
