import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import Calendar from '../../../components/Calendar';

const MoniteurFincProfilScreen = ({ navigation, route }) => {
  const { userData } = route.params;

  const handleQuestionnairePress = () => {
    navigation.navigate('MoniteurFinc/QuestionnaireScreen');
  };

  const handleStatistiquesPress = () => {
    navigation.navigate('MoniteurFinc/StatistiquesScreen');
  };

  return (
    <View style={styles.container}>
      <Header title={`Profil Moniteur FINC - ${userData.prenom}`} />
      <ScrollView style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          <Text style={styles.text}>Nom: {userData.nom}</Text>
          <Text style={styles.text}>Prénom: {userData.prenom}</Text>
          <Text style={styles.text}>Zone d'intervention: {userData.zone}</Text>
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Planning des activités</Text>
          <Calendar />
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleQuestionnairePress}
          >
            <Text style={styles.buttonText}>Nouveau questionnaire</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleStatistiquesPress}
          >
            <Text style={styles.buttonText}>Statistiques</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupsSection}>
          <Text style={styles.sectionTitle}>Groupes actifs</Text>
          {userData.groupes?.map((groupe, index) => (
            <View key={index} style={styles.groupCard}>
              <Text style={styles.groupTitle}>Groupe {groupe.nom}</Text>
              <Text style={styles.text}>Participants: {groupe.participants}</Text>
              <Text style={styles.text}>Activité: {groupe.activite}</Text>
            </View>
          ))}
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Statistiques générales</Text>
          <Text style={styles.text}>Enfants suivis: {userData.stats?.nbEnfants}</Text>
          <Text style={styles.text}>Activités en cours: {userData.stats?.nbActivites}</Text>
          <Text style={styles.text}>Taux de participation: {userData.stats?.tauxParticipation}%</Text>
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
  groupsSection: {
    marginBottom: 24,
  },
  groupCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  groupTitle: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: 8,
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

export default MoniteurFincProfilScreen;
