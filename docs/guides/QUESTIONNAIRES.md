# Guide Complet des Questionnaires d'Évaluation

## Système d'Évaluation

### Codes Couleur et Signification
- 🟢 Vert (#18CD7F) : Objectif atteint
- 🟡 Orange (#FFB923) : En progression
- 🔴 Rouge (#FF4545) : Besoin d'amélioration

### Calcul des Moyennes
```javascript
// Système de points
Vert = 3 points
Orange = 2 points
Rouge = 1 point

// Calcul
Moyenne = Total des points / Nombre de questions

// Interprétation
≥ 2.5 → "Très bien"
1.5 à 2.4 → "En progression"
< 1.5 → "À améliorer"
```

## Catégories Communes aux Trois Questionnaires

### 1. Communication et Politesse
- Salutations (bonjour/au revoir)
- Formules de politesse
- Contact visuel
- Réponse à l'appel du prénom

### 2. Gestion des Émotions
- Contrôle de l'agressivité
- Réaction aux conflits
- Expression des émotions
- Patience et partage

### 3. Hygiène et Organisation
- Lavage des mains
- Rangement
- Respect du matériel
- Suivi des consignes

## Questionnaires Détaillés

### 1. Questionnaire École (30 questions)
#### Objectif
Évaluer le comportement et l'adaptation de l'enfant en milieu scolaire.

#### Questions par Catégorie
1. **Communication et Politesse** (5 questions)
   - Salutations et politesse
   - Contact visuel
   - Interaction avec l'enseignant
   _Note: Particulièrement important pour l'intégration sociale_

2. **Comportement en Classe** (5 questions)
   - Participation ordonnée
   - Écoute active
   - Respect des tours de parole
   _Note: Essentiel pour l'apprentissage collectif_

3. **Gestion des Émotions** (5 questions)
   - Contrôle de l'agressivité
   - Réaction aux conflits
   - Expression des émotions
   - Patience et partage

4. **Hygiène et Organisation** (5 questions)
   - Lavage des mains
   - Rangement
   - Respect du matériel
   - Suivi des consignes

5. **Concentration et Participation** (5 questions)
   - Reste concentré(e) en classe
   - Participes-tu et respectes-tu les règles ?
   - Respectes-tu le matériel et l'espace de la classe ?
   - Respectes-tu les horaires de travail et de pause ?
   - Demandes-tu de l'aide si nécessaire ?

6. **Attitude face au Travail** (5 questions)
   - Fais-tu de ton mieux même si c'est difficile ?
   - Commences-tu ton travail rapidement sans aller jouer ?
   - Restes-tu en classe pendant les leçons ?
   - Évites-tu de jouer pendant les leçons ?
   - Maintiens-tu le contact visuel en parlant ?

### 2. Questionnaire Maison (9 questions)
#### Objectif
Évaluer l'autonomie et le comportement de l'enfant dans le cadre familial.

#### Questions par Catégorie
1. **Relations Familiales** (2 questions)
   - Écoutes-tu tes parents ?
   - Arrêtes-tu de te disputer avec ton frère ou ta sœur ?

2. **Organisation et Propreté** (3 questions)
   - Fais-tu ton lit ?
   - Ranges-tu tes vêtements ?
   - Ranges-tu tes chaussures à l'entrée ?

3. **Comportement à Table** (2 questions)
   - Jettes-tu les restes de nourriture à la poubelle ?
   - Partages-tu la nourriture et les boissons avec ta famille ?

4. **Rangement et Communication** (2 questions)
   - Ranges-tu tes jouets et tes livres ?
   - Maintiens-tu le contact visuel en parlant ?

### 3. Questionnaire Maison de Quartier (20 questions)
#### Objectif
Évaluer la socialisation et le comportement en collectivité.

#### Questions par Catégorie
1. **Comportement Social** (6 questions)
   - Dis-tu bonjour et au revoir ?
   - Utilises-tu des phrases polies ?
   - Partages-tu les jouets et restes-tu patient(e) ?
   - T'excuses-tu après un différend ?
   - Maintiens-tu le contact visuel en parlant ?
   - Réponds-tu lorsqu'on t'appelle par ton prénom ?

2. **Gestion des Émotions** (4 questions)
   - Évites-tu les gestes violents ?
   - Réagis-tu calmement en cas de conflit ?
   - Exprimes-tu tes émotions sans agressivité ?
   - Établis-tu un contact visuel avant de répondre ?

3. **Hygiène et Organisation** (4 questions)
   - Te laves-tu les mains avant les repas et après les toilettes ?
   - Ranges-tu les jouets et tes affaires ?
   - Suis-tu les consignes pendant les activités ?
   - Mets-tu tes chaussons et retournes-tu en classe ?

4. **Comportement pendant les Repas** (4 questions)
   - Restes-tu assis(e) pendant les repas ?
   - Respectes-tu les règles de service des repas ?
   - Remercies-tu lorsqu'on t'aide ?
   - Ranges-tu ton verre après les repas ?

5. **Participation et Concentration** (2 questions)
   - Restes-tu concentré(e) sur l'activité ?
   - Participes-tu et respectes-tu les règles ?

## Guide d'Utilisation

### Conseils pour l'Évaluation
1. **Observation Régulière**
   - Observer sur plusieurs jours
   - Noter les progrès quotidiens

2. **Cohérence des Évaluations**
   - Utiliser les mêmes critères
   - Être objectif et constant

3. **Communication avec l'Enfant**
   - Expliquer les évaluations
   - Encourager les progrès

### Exemple de Suivi

```javascript
// Exemple de suivi hebdomadaire
Semaine 1 :
- École: 2.7 (Très bien)
- Maison: 2.2 (En progression)
- Maison de quartier: 2.4 (En progression)

Semaine 2 :
- École: 2.8 (Très bien)
- Maison: 2.5 (Très bien)
- Maison de quartier: 2.6 (Très bien)
```

## Format Technique

### Structure JSON
```json
{
  "question": "Question posée ?",
  "answer": "Réponse attendue",
  "evaluation": {
    "Rouge": "FF4545",
    "Orange": "FFB923",
    "Vert": "18CD7F"
  },
  "category": "Communication",
  "context": "École|Maison|Maison de quartier",
  "importance": 1-5
}
```

### Stockage et Analyse
- Sauvegarde quotidienne des évaluations
- Génération de graphiques de progression
- Export des données pour analyse

## Recommandations pour l'Amélioration Continue

### Pour les Évaluateurs
1. Maintenir une évaluation objective
2. Noter les observations particulières
3. Communiquer régulièrement avec les autres évaluateurs

### Pour l'Enfant
1. Expliquer les objectifs clairement
2. Célébrer les progrès
3. Identifier les points d'amélioration de manière positive
