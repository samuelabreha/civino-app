#!/bin/bash

# Installation de Homebrew si non installé
if ! command -v brew &> /dev/null; then
    echo "Installation de Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Installation de Node.js
echo "Installation de Node.js..."
brew install node

# Installation de Yarn
echo "Installation de Yarn..."
npm install -g yarn

# Installation des dépendances du projet
echo "Installation des dépendances du projet..."
yarn install

# Installation de Cocoapods pour iOS
echo "Installation de Cocoapods..."
brew install cocoapods

# Installation des pods iOS
echo "Installation des pods iOS..."
cd ios && pod install && cd ..

echo "Installation terminée!"
