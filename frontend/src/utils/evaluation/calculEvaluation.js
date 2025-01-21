/**
 * Calcule les médailles en fonction des réponses de l'enfant et de l'adulte
 * @param {Array} childResponses - Réponses de l'enfant
 * @param {Array} adultResponses - Réponses de l'adulte
 * @returns {Object} Nombre de médailles or, argent et bronze
 */
export const calculateMedals = (childResponses, adultResponses) => {
  let medals = { or: 0, argent: 0, bronze: 0 };

  childResponses.forEach((childResponse, index) => {
    const adultResponse = adultResponses[index]?.evaluation;

    if (childResponse.evaluation === adultResponse) {
      medals.or++;
    } else if (
      (childResponse.evaluation === "Vert" && adultResponse === "Jaune") ||
      (childResponse.evaluation === "Jaune" && adultResponse === "Rouge") ||
      (childResponse.evaluation === "Jaune" && adultResponse === "Vert") ||
      (childResponse.evaluation === "Rouge" && adultResponse === "Jaune")
    ) {
      medals.argent++;
    } else {
      medals.bronze++;
    }
  });

  return medals;
};

/**
 * Vérifie si l'enfant mérite une récompense hebdomadaire
 * @param {Array} dailyMedals - Tableau des médailles quotidiennes
 * @returns {Object} Informations sur la récompense
 */
export const checkWeeklyReward = (dailyMedals) => {
  const totalGoldMedals = dailyMedals.reduce((sum, day) => sum + day.or, 0);
  const averageGoldPerDay = totalGoldMedals / dailyMedals.length;

  return {
    totalOr: totalGoldMedals,
    moyenneOrParJour: averageGoldPerDay,
    recompense: averageGoldPerDay >= 3 ? "Récompense Débloquée !" : "Continue tes efforts !",
  };
};

/**
 * Calcule le score et l'appréciation globale
 * @param {Array} responses - Réponses à évaluer
 * @returns {Object} Score total et appréciation
 */
const calculateScore = (responses) => {
  const totalScore = responses.reduce((sum, item) => {
    if (item.evaluation === "Vert") return sum + 3;
    if (item.evaluation === "Jaune") return sum + 2;
    if (item.evaluation === "Rouge") return sum + 1;
    return sum;
  }, 0);

  const average = totalScore / responses.length;
  let appreciation = "";

  if (average >= 2.5) {
    appreciation = "Très bien";
  } else if (average >= 1.5) {
    appreciation = "En progression";
  } else {
    appreciation = "À améliorer";
  }

  return { appreciation, average: average.toFixed(2) };
};

/**
 * Calcule l'évaluation globale incluant les médailles et l'appréciation
 * @param {Array} childResponses - Réponses de l'enfant
 * @param {Array} adultResponses - Réponses de l'adulte
 * @returns {Object} Résultat complet de l'évaluation
 */
export const calculateOverall = (childResponses, adultResponses) => {
  const medals = calculateMedals(childResponses, adultResponses);
  const childScore = calculateScore(childResponses);
  const adultScore = calculateScore(adultResponses);

  return {
    medals,
    enfant: childScore,
    adulte: adultScore,
    correspondance: {
      pourcentageOr: (medals.or / childResponses.length) * 100,
      pourcentageArgent: (medals.argent / childResponses.length) * 100,
      pourcentageBronze: (medals.bronze / childResponses.length) * 100,
    }
  };
};
