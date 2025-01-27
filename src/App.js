import React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from './analytics';

const App = () => {
  const { t } = useTranslation();

  // Exemple d'enregistrement d'un événement lors du démarrage de l'application
  Analytics.logEvent('Application démarrée');

  // Exemple d'enregistrement d'un événement lors d'une action utilisateur
  const handleUserAction = () => {
    Analytics.logEvent('Action utilisateur');
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={handleUserAction}>Effectuer une action</button>
      {/* Ajoutez d'autres composants et logique ici */}
    </div>
  );
};

export default App;
