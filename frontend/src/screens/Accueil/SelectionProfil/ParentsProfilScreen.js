import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import Calendar from '../../../components/Calendar';

const ParentsProfilScreen = ({ navigation, route }) => {
  const { userData } = route.params;

  const handleDocumentsPress = () => {
    navigation.navigate('Documents/ListeDocumentsScreen');
  };

  const handleContactsPress = () => {
    navigation.navigate('Contacts/ListeContactsScreen');
  };

  return (
    <View style={styles.container}>
      <Header title={`Profil Parent - ${userData.prenom}`} />
      <ScrollView style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          <Text style={styles.text}>Nom: {userData.nom}</Text>
          <Text style={styles.text}>Prénom: {userData.prenom}</Text>
        </View>

        <View style={styles.enfantsSection}>
          <Text style={styles.sectionTitle}>Enfants suivis</Text>
          {userData.enfants?.map((enfant, index) => (
            <View key={index} style={styles.enfantCard}>
              <Text style={styles.enfantNom}>{enfant.prenom} {enfant.nom}</Text>
              <Text style={styles.text}>Âge: {enfant.age} ans</Text>
              <Text style={styles.text}>École: {enfant.ecole}</Text>
              <TouchableOpacity 
                style={styles.voirProfilButton}
                onPress={() => navigation.navigate('Enfant/VueEnsembleScreen', { enfantId: enfant.id })}
              >
                <Text style={styles.voirProfilText}>Voir le profil</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Calendrier des rendez-vous</Text>
          <Calendar />
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleDocumentsPress}
          >
            <Text style={styles.buttonText}>Documents</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleContactsPress}
          >
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notificationsSection}>
          <Text style={styles.sectionTitle}>Dernières notifications</Text>
          {userData.notifications?.map((notif, index) => (
            <View key={index} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{notif.titre}</Text>
              <Text style={styles.text}>{notif.message}</Text>
              <Text style={styles.dateText}>{notif.date}</Text>
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
  enfantsSection: {
    marginBottom: 24,
  },
  enfantCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  enfantNom: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: 8,
  },
  voirProfilButton: {
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
  },
  voirProfilText: {
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
  notificationsSection: {
    marginBottom: 24,
  },
  notificationCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  notificationTitle: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: 8,
  },
  dateText: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 8,
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

export default ParentsProfilScreen;
