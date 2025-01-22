# Guide de Contribution CIVINO

## 🌟 Comment Contribuer

### Prérequis
- Git installé localement
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Connaissance de React Native

### Processus de Contribution

1. 🍴 **Fork du Projet**
   ```bash
   # Cloner votre fork
   git clone https://github.com/votre-username/civino-app.git
   cd civino-app
   ```

2. 🌿 **Créer une Branche**
   ```bash
   # Créer une branche pour votre fonctionnalité
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

3. 💻 **Développement**
   - Suivre les standards de code
   - Ajouter des tests unitaires
   - Documenter les nouvelles fonctionnalités

4. 🧪 **Tests**
   ```bash
   # Lancer les tests
   npm run test
   
   # Vérifier le linting
   npm run lint
   ```

5. 📝 **Commit**
   ```bash
   # Suivre la convention de commit
   feat: ajouter une nouvelle fonctionnalité
   fix: corriger un bug
   docs: mettre à jour la documentation
   ```

6. 🚀 **Push et Pull Request**
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```

### Standards de Code

#### Style de Code
- Utiliser ESLint et Prettier
- Suivre les bonnes pratiques React Native
- Documenter les composants complexes

#### Tests
- Tests unitaires pour les composants
- Tests d'intégration pour les flux principaux
- Couverture de code > 80%

### Review Process
1. Revue de code par au moins 2 développeurs
2. Validation des tests automatisés
3. Vérification de la documentation

## 🎯 Objectifs du Projet

### Priorités
1. Expérience utilisateur fluide
2. Performance optimale
3. Code maintenable
4. Documentation claire

### Architecture
- Suivre le pattern Redux pour la gestion d'état
- Utiliser les hooks React
- Implémenter une architecture modulaire

## 📞 Support

### Canaux de Communication
- GitHub Issues pour les bugs
- Discussions GitHub pour les questions
- Email: dev@civino.app pour le support

### Ressources
- [Documentation API](./docs/api/README.md)
- [Guide de Style](./docs/style-guide.md)
- [Architecture](./docs/architecture/README.md)

## 🎉 Reconnaissance

Nous remercions tous nos contributeurs pour leur aide précieuse dans l'amélioration de CIVINO !

---

© 2025 CIVINO - Tous droits réservés
