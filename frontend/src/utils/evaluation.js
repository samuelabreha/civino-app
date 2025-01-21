// Points system constants
export const EVALUATION_POINTS = {
  VERT: 3,
  JAUNE: 2,
  ROUGE: 1,
};

// Appreciation thresholds
export const APPRECIATION_THRESHOLDS = {
  EXCELLENT: 2.5,
  PROGRESS: 1.5,
};

/**
 * Calculate average score from evaluations
 * @param {Array} evaluations - Array of evaluation objects with 'evaluation' property
 * @returns {number} - Average score
 */
export const calculateAverage = (evaluations) => {
  if (!evaluations || evaluations.length === 0) return 0;

  const totalPoints = evaluations.reduce((sum, item) => {
    switch (item.evaluation.toUpperCase()) {
      case 'VERT':
        return sum + EVALUATION_POINTS.VERT;
      case 'JAUNE':
        return sum + EVALUATION_POINTS.JAUNE;
      case 'ROUGE':
        return sum + EVALUATION_POINTS.ROUGE;
      default:
        return sum;
    }
  }, 0);

  return totalPoints / evaluations.length;
};

/**
 * Get appreciation based on average score
 * @param {number} average - Average score
 * @returns {string} - Appreciation text
 */
export const getAppreciation = (average) => {
  if (average >= APPRECIATION_THRESHOLDS.EXCELLENT) {
    return 'Très bien';
  } else if (average >= APPRECIATION_THRESHOLDS.PROGRESS) {
    return 'En progression';
  } else {
    return 'À améliorer';
  }
};

/**
 * Calculate statistics from evaluations
 * @param {Array} evaluations - Array of evaluation objects
 * @returns {Object} - Statistics object
 */
export const calculateStatistics = (evaluations) => {
  if (!evaluations || evaluations.length === 0) {
    return {
      total: 0,
      vert: 0,
      jaune: 0,
      rouge: 0,
      vertPercentage: 0,
      jaunePercentage: 0,
      rougePercentage: 0,
      average: 0,
      appreciation: 'Non évalué',
    };
  }

  const stats = evaluations.reduce(
    (acc, item) => {
      switch (item.evaluation.toUpperCase()) {
        case 'VERT':
          acc.vert++;
          break;
        case 'JAUNE':
          acc.jaune++;
          break;
        case 'ROUGE':
          acc.rouge++;
          break;
      }
      return acc;
    },
    { vert: 0, jaune: 0, rouge: 0 }
  );

  const total = evaluations.length;
  const average = calculateAverage(evaluations);

  return {
    total,
    ...stats,
    vertPercentage: (stats.vert / total) * 100,
    jaunePercentage: (stats.jaune / total) * 100,
    rougePercentage: (stats.rouge / total) * 100,
    average: Number(average.toFixed(2)),
    appreciation: getAppreciation(average),
  };
};

/**
 * Get color code for evaluation
 * @param {string} evaluation - Evaluation value (VERT, JAUNE, ROUGE)
 * @returns {string} - Color code
 */
export const getEvaluationColor = (evaluation) => {
  switch (evaluation.toUpperCase()) {
    case 'VERT':
      return '#4CAF50';
    case 'JAUNE':
      return '#FFC107';
    case 'ROUGE':
      return '#F44336';
    default:
      return '#9E9E9E';
  }
};

/**
 * Format date range for reports
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {string} - Formatted date range
 */
export const formatDateRange = (startDate, endDate) => {
  const options = { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const start = new Date(startDate).toLocaleDateString('fr-FR', options);
  const end = new Date(endDate).toLocaleDateString('fr-FR', options);
  
  return `${start} - ${end}`;
};
