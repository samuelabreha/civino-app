import ecole from './ecole.json';
import maison from './maison.json';
import maisonQuartier from './maison_quartier.json';

export const questionnaires = {
  ecole,
  maison,
  maisonQuartier,
};

export const getQuestionnaire = (id) => questionnaires[id];

export const getAllQuestionnaires = () => Object.values(questionnaires);

export default questionnaires;
