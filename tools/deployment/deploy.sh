#!/bin/bash

# Configuration
APP_NAME="civino"
DEPLOY_ENV=$1
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Vérification de l'environnement
if [ -z "$DEPLOY_ENV" ]; then
    echo "Usage: $0 <environment>"
    echo "Environments: development, staging, production"
    exit 1
fi

# Fonction de logging
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

# Préparation du déploiement
log "Début du déploiement pour l'environnement $DEPLOY_ENV"

# Construction du frontend
log "Construction du frontend..."
cd frontend
npm install
npm run build
if [ $? -ne 0 ]; then
    log "Erreur lors de la construction du frontend"
    exit 1
fi

# Construction du backend
log "Construction du backend..."
cd ../backend
npm install
npm run build
if [ $? -ne 0 ]; then
    log "Erreur lors de la construction du backend"
    exit 1
fi

# Sauvegarde de la base de données
log "Sauvegarde de la base de données..."
mongodump --out="backup_${TIMESTAMP}"

# Déploiement
log "Déploiement de l'application..."
case $DEPLOY_ENV in
    "development")
        npm run start:dev
        ;;
    "staging")
        pm2 start ecosystem.config.js --env staging
        ;;
    "production")
        pm2 start ecosystem.config.js --env production
        ;;
    *)
        log "Environnement inconnu: $DEPLOY_ENV"
        exit 1
        ;;
esac

# Vérification post-déploiement
log "Vérification du déploiement..."
curl -f http://localhost:3000/api/health
if [ $? -eq 0 ]; then
    log "Déploiement réussi!"
else
    log "Erreur lors du déploiement"
    exit 1
fi

log "Déploiement terminé avec succès"
