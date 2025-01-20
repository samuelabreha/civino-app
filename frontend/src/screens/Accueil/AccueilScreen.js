import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { colors, typography } from '../../styles/globalStyles';

const ProfilCard = ({ title, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
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
        <Text style={styles.sectionTitle}>Sélectionnez votre profil</Text>
        
        <View style={styles.cardsContainer}>
          {profiles.map((profile, index) => (
            <ProfilCard
              key={index}
              title={profile.title}
              onPress={() => navigation.navigate(profile.route)}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => navigation.navigate('CreationProfil')}
        >
          <Text style={styles.createButtonText}>Créer un nouveau profil</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    ...typography.h1,
    marginVertical: 16,
    color: colors.text,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    ...typography.h2,
    color: colors.background,
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  createButtonText: {
    ...typography.h2,
    color: colors.background,
  },
});

export default AccueilScreen;
