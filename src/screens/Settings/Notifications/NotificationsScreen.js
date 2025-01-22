import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState({
    enabled: true,
    daily: true,
    weekly: true,
    monthly: true,
    questionnaires: true,
    reports: true,
    reminders: true,
    sound: true,
    vibration: true,
    updates: true
  });

  const toggleSwitch = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderNotificationOption = (title, description, key, icon) => (
    <View style={styles.optionContainer}>
      <View style={styles.optionContent}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color="#2196F3" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionDescription}>{description}</Text>
        </View>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#90CAF9' }}
        thumbColor={notifications[key] ? '#2196F3' : '#f4f3f4'}
        ios_backgroundColor="#767577"
        onValueChange={() => toggleSwitch(key)}
        value={notifications[key]}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="notifications" size={40} color="#2196F3" />
        <Text style={styles.title}>Notifications</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paramètres Généraux</Text>
        {renderNotificationOption(
          'Activer les notifications',
          'Recevoir toutes les notifications de l\'application',
          'enabled',
          'notifications-active'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fréquence des Notifications</Text>
        {renderNotificationOption(
          'Notifications quotidiennes',
          'Rappels et mises à jour quotidiens',
          'daily',
          'today'
        )}
        {renderNotificationOption(
          'Notifications hebdomadaires',
          'Résumés et rapports hebdomadaires',
          'weekly',
          'view-week'
        )}
        {renderNotificationOption(
          'Notifications mensuelles',
          'Bilans et statistiques mensuels',
          'monthly',
          'date-range'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Types de Notifications</Text>
        {renderNotificationOption(
          'Questionnaires',
          'Rappels pour remplir les questionnaires',
          'questionnaires',
          'assignment'
        )}
        {renderNotificationOption(
          'Rapports',
          'Notifications des nouveaux rapports',
          'reports',
          'assessment'
        )}
        {renderNotificationOption(
          'Rappels',
          'Rappels pour les tâches importantes',
          'reminders',
          'alarm'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Préférences de Notification</Text>
        {renderNotificationOption(
          'Son',
          'Activer le son pour les notifications',
          'sound',
          'volume-up'
        )}
        {renderNotificationOption(
          'Vibration',
          'Activer la vibration pour les notifications',
          'vibration',
          'vibration'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mises à jour</Text>
        {renderNotificationOption(
          'Mises à jour de l\'application',
          'Notifications des nouvelles fonctionnalités',
          'updates',
          'system-update'
        )}
      </View>

      <TouchableOpacity style={styles.resetButton}>
        <Icon name="refresh" size={24} color="#FFFFFF" />
        <Text style={styles.resetButtonText}>
          Réinitialiser les Paramètres
        </Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Icon name="info" size={20} color="#757575" />
        <Text style={styles.infoText}>
          Les notifications peuvent également être configurées dans les paramètres système de votre appareil.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#757575',
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 10,
    flex: 1,
  },
});

export default NotificationsScreen;
