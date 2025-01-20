# Projet CIVINO

## Description
Application éducative pour la gestion et le suivi des enfants dans différents contextes éducatifs (école, maison de quartier, etc.).

## Structure du Projet

```
/CIVINO/
├── backend/                 # Backend de l'application
│   ├── api/                # API REST
│   ├── config/             # Configuration
│   ├── controllers/        # Contrôleurs
│   ├── models/            # Modèles de données
│   ├── routes/            # Routes API
│   ├── services/          # Services métier
│   └── tests/             # Tests unitaires et d'intégration
│
├── frontend/               # Frontend React Native
│   ├── android/           # Configuration Android
│   ├── ios/               # Configuration iOS
│   └── src/               # Code source
│       ├── components/    # Composants réutilisables
│       ├── screens/       # Écrans de l'application
│       ├── navigation/    # Configuration de la navigation
│       ├── assets/        # Ressources (images, fonts)
│       └── styles/        # Styles globaux
│
├── docs/                   # Documentation
│   ├── api/               # Documentation API
│   ├── architecture/      # Architecture du projet
│   └── guides/            # Guides d'utilisation
│
└── tools/                  # Outils et scripts
    ├── deployment/        # Scripts de déploiement
    └── development/       # Outils de développement
```

## Installation

1. Cloner le repository
2. Installer les dépendances frontend :
   ```bash
   cd frontend
   npm install
   ```

3. Installer les dépendances backend :
   ```bash
   cd backend
   npm install
   ```

## Démarrage

### Frontend
```bash
cd frontend
npm start
```

### Backend
```bash
cd backend
npm start
```

## Documentation
Consultez le dossier `docs/` pour la documentation complète du projet.

## Contribution
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Créer une Pull Request

## License
Ce projet est sous licence MIT.
