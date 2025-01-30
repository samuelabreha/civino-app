function calculateMedals(childResponses, adultResponses) {
  let medals = { gold: 0, silver: 0, bronze: 0 };

  childResponses.forEach((childResponse, index) => {
    const adultResponse = adultResponses[index]?.evaluation;

    if (childResponse.evaluation === adultResponse) {
      medals.gold++;
    } else if (
      (childResponse.evaluation === "Vert" && adultResponse === "Jaune") ||
      (childResponse.evaluation === "Jaune" && adultResponse === "Rouge") ||
      (childResponse.evaluation === "Jaune" && adultResponse === "Vert") ||
      (childResponse.evaluation === "Rouge" && adultResponse === "Jaune")
    ) {
      medals.silver++;
    } else {
      medals.bronze++;
    }
  });

  return medals;
}

function checkWeeklyReward(dailyMedals) {
  const totalGoldMedals = dailyMedals.reduce((sum, day) => sum + day.gold, 0);
  const averageGoldPerDay = totalGoldMedals / dailyMedals.length;

  return {
    totalGold: totalGoldMedals,
    averageGoldPerDay: averageGoldPerDay,
    reward: averageGoldPerDay >= 3 ? "Reward Unlocked!" : "Keep Trying!",
  };
}

function calculateOverall(childResponses, adultResponses) {
  const medals = calculateMedals(childResponses, adultResponses);

  const totalScore = childResponses.reduce((sum, item) => {
    if (item.evaluation === "Vert") return sum + 3;
    if (item.evaluation === "Jaune") return sum + 2;
    if (item.evaluation === "Rouge") return sum + 1;
    return sum;
  }, 0);

  const average = totalScore / childResponses.length;
  let appreciation = "";

  if (average >= 2.5) {
    appreciation = "Très bien";
  } else if (average >= 1.5) {
    appreciation = "En progression";
  } else {
    appreciation = "À améliorer";
  }

  return { medals, appreciation, average: average.toFixed(2) };
}

// Exemple de données pour les tests
const childResponses = [
  { question: "Dis-tu bonjour et au revoir ?", evaluation: "Vert" },
  { question: "Utilises-tu des phrases polies ?", evaluation: "Jaune" },
  { question: "Partages-tu les jouets ?", evaluation: "Rouge" },
];

const adultResponses = [
  { question: "Dis-tu bonjour et au revoir ?", evaluation: "Vert" },
  { question: "Utilises-tu des phrases polies ?", evaluation: "Jaune" },
  { question: "Partages-tu les jouets ?", evaluation: "Vert" },
];

// Tests des fonctions
const medals = calculateMedals(childResponses, adultResponses);
console.log(medals);

const weeklyReward = checkWeeklyReward([medals]);
console.log(weeklyReward);

const overall = calculateOverall(childResponses, adultResponses);
console.log(overall);

export { calculateMedals, checkWeeklyReward, calculateOverall };
