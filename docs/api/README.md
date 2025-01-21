# Documentation API CIVINO

## Introduction
Cette documentation détaille les endpoints API disponibles dans l'application CIVINO.

## Base URL
```
http://localhost:3000/api
```

## Authentification
Toutes les requêtes (sauf login et register) doivent inclure un token JWT dans le header :
```
Authorization: Bearer <votre_token>
```

## Endpoints

### Authentification

#### POST /auth/login
Connexion d'un utilisateur
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST /auth/register
Inscription d'un nouvel utilisateur
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "enseignant"
}
```

### Utilisateurs

#### GET /users/profile
Récupère le profil de l'utilisateur connecté

#### PUT /users/profile
Met à jour le profil de l'utilisateur
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}
```

### Activités

#### GET /activities
Liste toutes les activités

#### POST /activities
Crée une nouvelle activité
```json
{
  "title": "Activité créative",
  "description": "Atelier de peinture",
  "date": "2025-01-20T14:00:00Z",
  "duration": 60,
  "maxParticipants": 15
}
```

### Documents

#### GET /documents
Liste tous les documents

#### POST /documents/upload
Upload un nouveau document (multipart/form-data)
- file: Fichier à uploader
- type: Type de document
- description: Description du document

## Codes d'erreur
- 200: Succès
- 201: Création réussie
- 400: Requête invalide
- 401: Non authentifié
- 403: Non autorisé
- 404: Ressource non trouvée
- 500: Erreur serveur

## Limites
- Taille maximale des fichiers: 5MB
- Rate limiting: 100 requêtes par minute
