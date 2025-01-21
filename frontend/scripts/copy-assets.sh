#!/bin/bash

# Définir les chemins source et destination
SOURCE_DIR="/Users/abrehasamuel/Downloads/Aset Education"
DEST_DIR="/Volumes/ABREHA SSD/03) TÉLÉCHARGEMENT 9 JANVIER 2025 (CLASSER OU SUPPRIMER DOSSIER)/APPLICATIONS_EDUCATIVE/CIVINO/frontend/src/assets"

# Créer le répertoire de destination s'il n'existe pas
mkdir -p "$DEST_DIR"

# Copier les icônes
echo "Copie des icônes..."
mkdir -p "$DEST_DIR/Icons"
cp -r "$SOURCE_DIR/Icons/"* "$DEST_DIR/Icons/"

# Copier les illustrations
echo "Copie des illustrations..."
mkdir -p "$DEST_DIR/Illustrations"
cp -r "$SOURCE_DIR/Illustrations/"* "$DEST_DIR/Illustrations/"

# Copier les polices
echo "Copie des polices..."
mkdir -p "$DEST_DIR/Fonts"
cp -r "$SOURCE_DIR/Font/"* "$DEST_DIR/Fonts/"

echo "Copie des assets terminée !"
