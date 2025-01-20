# Système d'Évaluation et Calcul des Moyennes

## Système de Points
- Vert = 3 points
- Jaune = 2 points
- Rouge = 1 point

## Calcul de la Moyenne
```javascript
Moyenne = Total des points / Nombre de questions
```

## Barème d'Appréciation
- Si moyenne ≥ 2.5 → "Très bien"
- Si 1.5 ≤ moyenne < 2.5 → "En progression"
- Si moyenne < 1.5 → "À améliorer"

## Exemple de Code
```javascript
function calculateAverageAndAppreciation(evaluations) {
  let totalScore = 0;
  let count = 0;

  evaluations.forEach((item) => {
    if (item.evaluation === "Vert") {
      totalScore += 3;
      count++;
    } else if (item.evaluation === "Jaune") {
      totalScore += 2;
      count++;
    } else if (item.evaluation === "Rouge") {
      totalScore += 1;
      count++;
    }
  });

  const average = count > 0 ? totalScore / count : 0;

  let appreciation = "";
  if (average >= 2.5) {
    appreciation = "Très bien";
  } else if (average >= 1.5) {
    appreciation = "En progression";
  } else {
    appreciation = "À améliorer";
  }

  return { average: average.toFixed(2), appreciation };
}
```

## Exemple d'Utilisation
```javascript
const evaluations = [
  { question: "Do you say hello?", evaluation: "Vert" },
  { question: "Do you use polite phrases?", evaluation: "Jaune" },
  { question: "Do you share toys?", evaluation: "Rouge" },
];

const result = calculateAverageAndAppreciation(evaluations);
console.log(result); // { average: "2.00", appreciation: "En progression" }
```
