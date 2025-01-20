import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import Calendar from '../../../components/Calendar';

const AdministrateurProfilScreen = ({ navigation, route }) => {
  const { userData } = route.params;

  const handleGestionUtilisateurs = () => {
    navigation.navigate('Parametres/GestionCompteScreen');
  };

  const handleStatistiques = () => {
    navigation.navigate('Statistiques');
  };

  const handleDocuments = () => {
    navigation.navigate('Documents/ListeDocumentsScreen');
  };

  return (
    <View style={styles.container}>
      <Header title={`Administration - ${userData.prenom}`} />
      <ScrollView style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informations administrateur</Text>
          <Text style={styles.text}>Nom: {userData.nom}</Text>
          <Text style={styles.text}>Prénom: {userData.prenom}</Text>
          <Text style={styles.text}>Niveau d'accès: {userData.accessLevel}</Text>
        </View>

        <View style={styles.statsOverview}>
          <Text style={styles.sectionTitle}>Vue d'ensemble</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{userData.stats?.totalUsers}</Text>
              <Text style={styles.statLabel}>Utilisateurs</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{userData.stats?.activeChildren}</Text>
              <Text style={styles.statLabel}>Enfants actifs</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{userData.stats?.totalSessions}</Text>
              <Text style={styles.statLabel}>Sessions</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{userData.stats?.documents}</Text>
              <Text style={styles.statLabel}>Documents</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleGestionUtilisateurs}
          >
            <Text style={styles.buttonText}>Gestion des utilisateurs</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleStatistiques}
          >
            <Text style={styles.buttonText}>Statistiques globales</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleDocuments}
          >
            <Text style={styles.buttonText}>Gestion des documents</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Planning des événements</Text>
          <Calendar />
        </View>

        <View style={styles.logsSection}>
          <Text style={styles.sectionTitle}>Dernières activités</Text>
          {userData.logs?.map((log, index) => (
            <View key={index} style={styles.logItem}>
              <Text style={styles.logText}>{log.action}</Text>
              <Text style={styles.logDate}>{log.date}</Text>
            </View>
          ))}
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
  statsOverview: {
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
  },
  statNumber: {
    ...typography.h1,
    color: colors.primary,
    marginBottom: 8,
  },
  statLabel: {
    ...typography.caption,
    color: colors.gray,
  },
  actionsSection: {
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
  },
  calendarSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
  },
  logsSection: {
    marginBottom: 24,
  },
  logItem: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logText: {
    ...typography.body,
    flex: 1,
  },
  logDate: {
    ...typography.caption,
    color: colors.gray,
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

export default AdministrateurProfilScreen;
