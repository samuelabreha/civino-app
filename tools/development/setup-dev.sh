#!/bin/bash

# Configuration
NODE_VERSION="18.x"
MONGODB_VERSION="6.0"

# Fonction de logging
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

# Vérification des prérequis
log "Vérification des prérequis..."

# Vérification de Node.js
if ! command -v node &> /dev/null; then
    log "Installation de Node.js $NODE_VERSION..."
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Vérification de MongoDB
if ! command -v mongod &> /dev/null; then
    log "Installation de MongoDB $MONGODB_VERSION..."
    wget -qO - https://www.mongodb.org/static/pgp/server-${MONGODB_VERSION}.asc | sudo apt-key add -
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/${MONGODB_VERSION} multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-${MONGODB_VERSION}.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
fi

# Installation des dépendances globales
log "Installation des dépendances globales..."
npm install -g npm@latest
npm install -g react-native-cli
npm install -g pm2
npm install -g nodemon

# Configuration du projet
log "Configuration du projet..."

# Backend
log "Configuration du backend..."
cd backend
npm install
cp .env.example .env
log "Backend configuré"

# Frontend
log "Configuration du frontend..."
cd ../frontend
npm install
cp .env.example .env
log "Frontend configuré"

# Configuration de Git
log "Configuration de Git..."
git init
git add .
git commit -m "Initial commit"

# Configuration des hooks de pre-commit
log "Configuration des hooks Git..."
npm install -g husky
npx husky install
npx husky add .husky/pre-commit "npm test"

# Création des certificats de développement
log "Création des certificats SSL pour le développement..."
mkdir -p config/ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout config/ssl/private.key -out config/ssl/certificate.crt

# Démarrage des services
log "Démarrage des services..."
sudo systemctl start mongodb
cd ../backend
npm run dev &
cd ../frontend
npm start &

log "Configuration de l'environnement de développement terminée!"
log "Pour démarrer le développement:"
log "1. Backend: cd backend && npm run dev"
log "2. Frontend: cd frontend && npm start"
log "3. Documentation API: http://localhost:3000/api-docs"
