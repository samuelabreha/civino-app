# CIVINO - Application de Suivi Comportemental

## 🌟 Version 2.0.0 - Janvier 2025

## Description
Application éducative pour la gestion et le suivi des enfants dans différents contextes éducatifs (école, maison de quartier, etc.).

## Fonctionnalités Principales

### 1. Gestion des Profils
- Création et gestion de profils (Enfant, Enseignant-e, Moniteur FINC, Parents, Administrateur)
- Interface adaptée selon le type de profil
- Contrats de comportement personnalisés

### 2. Évaluation et Suivi
- Questionnaires interactifs
- Évaluation par images
- Rapports de progression (quotidien, hebdomadaire, mensuel)
- Statistiques comportementales

### 3. Documentation
- Gestion des documents avec calendrier
- Rapports d'observation
- Contrats de comportement et PEI
- Upload et téléchargement de documents

### 4. Interface Utilisateur
- Design moderne et intuitif
- Navigation fluide
- Transitions animées
- Support multilingue
- Mode responsive (mobile, tablette, desktop)

### Nouvelles Fonctionnalités
- Interface utilisateur complètement repensée
- Système d'évaluation par images optimisé
- Gestion avancée des contrats comportementaux
- Rapports de progression détaillés
- Support multilingue (FR/EN)

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
│       │   ├── common/    # Composants communs (Button, Card, etc.)
│       │   ├── evaluation/# Composants d'évaluation
│       │   └── documents/ # Composants de gestion documentaire
│       ├── screens/       # Écrans de l'application
│       ├── navigation/    # Configuration de la navigation
│       ├── theme/         # Thème et styles globaux
│       └── assets/        # Ressources (images, fonts)
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

## Prérequis
- Node.js >= 16.0.0
- React Native >= 0.70.0
- npm >= 6.0.0
- iOS 13+ / Android 9+

## Installation

1. Cloner le repository :
   ```bash
   git clone https://github.com/votre-repo/civino.git
   cd civino
   ```

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

## Installation Rapide
```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build production
npm run build
```

## Configuration
1. Copier le fichier `.env.example` en `.env`
2. Configurer les variables d'environnement
3. Configurer la base de données

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

## Tests
```bash
# Tests frontend
cd frontend
npm test

# Tests backend
cd backend
npm test
```

## Déploiement
1. Construire l'application :
   ```bash
   cd frontend
   npm run build
   ```

2. Déployer le backend :
   ```bash
   cd backend
   npm run deploy
   ```

## Documentation
- Documentation complète dans le dossier `docs/`
- Guide d'utilisation : `docs/guides/user-guide.md`
- Documentation API : `docs/api/README.md`
- Architecture : `docs/architecture/README.md`

## Contributeurs
- Équipe de développement CIVINO
- Éducateurs spécialisés
- Designers UX/UI

## Support
Pour toute question : support@civino.app

## License
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contribution
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Créer une Pull Request
