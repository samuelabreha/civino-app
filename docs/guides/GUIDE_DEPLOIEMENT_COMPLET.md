# GUIDE DE DÉPLOIEMENT COMPLET
Application Éducative v1.0.0 | Janvier 2025

## TABLE DES MATIÈRES
1. [Prérequis et Configuration](#prérequis-et-configuration)
2. [Déploiement Frontend (Netlify)](#déploiement-frontend-netlify)
3. [Déploiement Backend (DigitalOcean)](#déploiement-backend-digitalocean)
4. [Configuration Mobile](#configuration-mobile)
5. [Monitoring et Maintenance](#monitoring-et-maintenance)

## PRÉREQUIS ET CONFIGURATION

### Environnement Requis
```bash
Node.js >= 16.0.0
npm >= 8.0.0
Expo CLI >= 6.0.0
Git >= 2.34.0
```

### Comptes et Accès Nécessaires
- Compte Netlify
- Compte DigitalOcean
- Compte GitHub
- Accès Sentry
- Accès Firebase

## DÉPLOIEMENT FRONTEND (NETLIFY)

### Configuration Netlify
```toml
[build]
  command = "npm run build"
  publish = "build"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "16.14.0"
  NPM_VERSION = "8.0.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables d'Environnement
```bash
REACT_APP_API_URL=https://api.education-app.com
REACT_APP_ENVIRONMENT=production
REACT_APP_SENTRY_DSN=https://your-sentry-dsn
REACT_APP_ANALYTICS_ID=UA-XXXXXXXX-X
```

### Déploiement
```bash
# Installation CLI
npm install netlify-cli -g

# Login et initialisation
netlify login
netlify init

# Déploiement
netlify deploy --prod
```

## DÉPLOIEMENT BACKEND (DIGITALOCEAN)

### Configuration App Platform
```yaml
name: education-app-api
region: fra1
services:
- name: api
  github:
    repo: education-app/backend
    branch: main
  build_command: npm run build
  run_command: npm start
  environment_slug: node-js
  instance_size_slug: basic-xxs
  instance_count: 2
```

### Base de Données
```bash
# MongoDB
doctl databases create education-app-db \
  --engine mongodb \
  --region fra1

# Redis
doctl databases create education-app-redis \
  --engine redis \
  --region fra1
```

### SSL et Domaine
```bash
# Configuration domaine
doctl apps create-domain education-app \
  --domain api.education-app.com

# SSL
doctl apps create-deployment education-app \
  --wait \
  --force-rebuild
```

## CONFIGURATION MOBILE

### Variables d'Environnement
```bash
API_URL=https://api.education-app.com
API_VERSION=v1
SENTRY_DSN=https://your-sentry-dsn
FIREBASE_CONFIG={...}
```

### Configuration App.json
```json
{
  "expo": {
    "name": "Application Éducative",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "orientation": "portrait",
    "updates": {
      "fallbackToCacheTimeout": 0
    }
  }
}
```

## MONITORING ET MAINTENANCE

### Alertes
```yaml
alerts:
- rule: DEPLOYMENT_FAILED
  channels:
  - email: devops@education-app.com
  - slack: "#deployments"

metrics:
  - name: cpu
    warning: 80
    critical: 90
  - name: memory
    warning: 80
    critical: 90
```

### Commandes Utiles
```bash
# Status des services
doctl apps list
netlify status

# Logs
doctl apps logs $APP_ID
netlify logs

# Rollback
netlify rollback
doctl apps rollback $APP_ID
```

Note : Gardez toujours les tokens d'accès et variables d'environnement en sécurité. Ne les commettez jamais dans le repository.
