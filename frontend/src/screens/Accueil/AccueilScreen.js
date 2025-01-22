import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Typography } from '../../components/common';
import Header from '../../components/Header';
import { theme } from '../../theme';

const ProfilCard = ({ title, onPress }) => (
  <Button
    variant="primary"
    size="large"
    style={styles.card}
    onPress={onPress}
  >
    {title}
  </Button>
);

const AccueilScreen = ({ navigation }) => {
  const profiles = [
    { title: 'Enfant', route: 'EnfantProfil' },
    { title: 'Enseignant', route: 'EnseignantProfil' },
    { title: 'Moniteur FINC', route: 'MoniteurFincProfil' },
    { title: 'Parents', route: 'ParentsProfil' },
    { title: 'Administrateur', route: 'AdministrateurProfil' },
  ];

  return (
    <View style={styles.container}>
      <Header title="Bienvenue sur Civino" showBack={false} />
      
      <ScrollView style={styles.content}>
        <Typography variant="h1" style={styles.sectionTitle}>
          Sélectionnez votre profil
        </Typography>
        
        <View style={styles.cardsContainer}>
          {profiles.map((profile, index) => (
            <ProfilCard
              key={index}
              title={profile.title}
              onPress={() => navigation.navigate(profile.route)}
            />
          ))}
        </View>

        <Button 
          variant="secondary"
          size="large"
          fullWidth
          style={styles.createButton}
          onPress={() => navigation.navigate('CreationProfil')}
        >
          Créer un nouveau profil
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.default,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    marginBottom: theme.spacing.xl,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  card: {
    width: '48%',
    marginBottom: theme.spacing.md,
  },
  createButton: {
    marginTop: theme.spacing.md,
  },
});

export default AccueilScreen;
