# Structure de l'Application Éducative

## Objectif
L'application vise à créer une plateforme éducative interactive permettant la collaboration entre différents profils (enfants, enseignants, parents, administrateurs) à travers des outils interactifs et des suivis de progression personnalisés.

## Modules Principaux

### 1. Accueil
- Gestion des profils
  - Création de profil
  - Sélection de profil
- Saisie des informations de base
- Gestion des contrats de comportement
- Questionnaires contextuels
  - École
  - Maison
  - Maison de quartier

### 2. Modules Utilisateurs
Fonctionnalités spécifiques par rôle :
- Questionnaires interactifs (image/texte)
- Rapports de progression
  - Quotidiens
  - Hebdomadaires
  - Mensuels
- Statistiques comportementales
- Calendrier intégré

### 3. Documents
- Gestion de fichiers
  - Chargement
  - Visualisation
  - Téléchargement
  - Suppression
- Intégration calendrier

### 4. Paramètres
- Personnalisation
  - Langue
  - Notifications
- Gestion de compte
  - Déconnexion sécurisée
  - Stockage local des identifiants

### 5. Contacts
- Gestion des contacts
  - Ajout
  - Suppression
  - Visualisation

## Structure Technique du Projet

\`\`\`
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Calendar.js
│   ├── Dropdown.js
│   ├── PDFDownloader.js
│   └── LoginManager.js
│
├── screens/
│   ├── Accueil/
│   │   ├── AccueilScreen.js
│   │   ├── CreationProfil/
│   │   │   ├── SaisieStatutScreen.js
│   │   │   ├── SaisieNomScreen.js
│   │   │   ├── SaisiePrenomScreen.js
│   │   │   ├── ContratsComportementScreen.js
│   │   │   └── Questionnaires/
│   │   └── SelectionProfil/
│   │
│   ├── AnimatriceReferente/
│   ├── Enfant/
│   ├── Enseignant/
│   ├── MoniteurFinc/
│   ├── Documents/
│   ├── Contacts/
│   ├── Parametres/
│   └── Authentification/
│
├── navigation/
│   ├── MainNavigator.js
│   └── TabNavigator.js
│
├── assets/
│   ├── images/
│   └── fonts/
│
└── styles/
    └── globalStyles.js
\`\`\`

## Points Techniques Importants

### Navigation
- Navigation intuitive entre modules
- Interface moderne et optimisée
- Gestion des rôles utilisateurs

### Intégrations
- Calendrier centralisé
- Génération de PDF
- Stockage local
- Gestion des fichiers

### Sécurité
- Authentification sécurisée
- Gestion des sessions
- Protection des données

### Personnalisation
- Multi-langues
- Thèmes adaptables
- Notifications configurables
