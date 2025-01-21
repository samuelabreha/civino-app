import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import Calendar from '../../../components/Calendar';

const EnseignantProfilScreen = ({ navigation, route }) => {
  const { userData } = route.params;

  const handleQuestionnairePress = () => {
    navigation.navigate('Enseignant/QuestionnaireScreen');
  };

  const handleStatistiquesPress = () => {
    navigation.navigate('Enseignant/StatistiquesScreen');
  };

  return (
    <View style={styles.container}>
      <Header title={`Profil Enseignant - ${userData.prenom}`} />
      <ScrollView style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          <Text style={styles.text}>Nom: {userData.nom}</Text>
          <Text style={styles.text}>Prénom: {userData.prenom}</Text>
          <Text style={styles.text}>Matière: {userData.matiere}</Text>
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Calendrier des cours</Text>
          <Calendar />
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleQuestionnairePress}
          >
            <Text style={styles.buttonText}>Remplir un questionnaire</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleStatistiquesPress}
          >
            <Text style={styles.buttonText}>Voir les statistiques</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Statistiques récentes</Text>
          <Text style={styles.text}>Nombre d'élèves suivis: {userData.stats?.nbEleves}</Text>
          <Text style={styles.text}>Questionnaires complétés: {userData.stats?.nbQuestionnaires}</Text>
        </View>
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
    padding: 16,
  },
  infoSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
  },
  calendarSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
  },
  actionsSection: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
  },
  statsSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: 16,
    color: colors.primary,
  },
  text: {
    ...typography.body,
    marginBottom: 8,
  },
});

export default EnseignantProfilScreen;
