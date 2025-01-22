export const routes = {
  // Routes principales
  accueil: '/accueil',
  profil: '/profil',
  parametres: '/parametres',

  // Routes d'authentification
  login: '/authentification/login',
  register: '/authentification/register',
  forgotPassword: '/authentification/mot-de-passe-oublie',

  // Routes des profils
  enfant: {
    accueil: '/enfant',
    questionnaire: '/enfant/questionnaire',
    evaluation: '/enfant/evaluation',
    statistiques: '/enfant/statistiques',
    contrats: '/enfant/contrats',
  },

  enseignant: {
    accueil: '/enseignant',
    questionnaire: '/enseignant/questionnaire',
    evaluation: '/enseignant/evaluation',
    rapports: '/enseignant/rapports',
    statistiques: '/enseignant/statistiques',
  },

  moniteurFinc: {
    accueil: '/moniteur-finc',
    questionnaire: '/moniteur-finc/questionnaire',
    evaluation: '/moniteur-finc/evaluation',
    rapports: '/moniteur-finc/rapports',
    statistiques: '/moniteur-finc/statistiques',
  },

  animatriceReferente: {
    accueil: '/animatrice-referente',
    questionnaire: '/animatrice-referente/questionnaire',
    evaluation: '/animatrice-referente/evaluation',
    rapports: '/animatrice-referente/rapports',
    statistiques: '/animatrice-referente/statistiques',
  },

  // Routes des fonctionnalités
  documents: {
    liste: '/documents',
    upload: '/documents/upload',
    viewer: '/documents/viewer',
    calendar: '/documents/calendrier',
  },

  contacts: {
    liste: '/contacts',
    ajouter: '/contacts/ajouter',
    modifier: '/contacts/modifier',
  },

  calendrier: '/calendrier',
  notifications: '/notifications',
};

export const getProfileRoute = (profileType) => {
  const profileRoutes = {
    enfant: routes.enfant.accueil,
    enseignant: routes.enseignant.accueil,
    moniteurFinc: routes.moniteurFinc.accueil,
    animatriceReferente: routes.animatriceReferente.accueil,
  };
  return profileRoutes[profileType] || routes.accueil;
};
