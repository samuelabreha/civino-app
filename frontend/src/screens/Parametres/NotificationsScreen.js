import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState({
    general: true,
    messages: true,
    activites: true,
    rapports: true,
    documents: false,
    rappels: true,
    email: true,
    push: true,
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
    // Implémenter la logique de sauvegarde des préférences
  };

  return (
    <View style={styles.container}>
      <Header title="Notifications" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Types de notifications</Text>
          
          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Notifications générales</Text>
              <Text style={styles.optionDescription}>
                Actualités et mises à jour importantes
              </Text>
            </View>
            <Switch
              value={notifications.general}
              onValueChange={() => handleToggle('general')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Messages</Text>
              <Text style={styles.optionDescription}>
                Nouveaux messages et conversations
              </Text>
            </View>
            <Switch
              value={notifications.messages}
              onValueChange={() => handleToggle('messages')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Activités</Text>
              <Text style={styles.optionDescription}>
                Rappels et mises à jour des activités
              </Text>
            </View>
            <Switch
              value={notifications.activites}
              onValueChange={() => handleToggle('activites')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Rapports</Text>
              <Text style={styles.optionDescription}>
                Nouveaux rapports et évaluations
              </Text>
            </View>
            <Switch
              value={notifications.rapports}
              onValueChange={() => handleToggle('rapports')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Documents</Text>
              <Text style={styles.optionDescription}>
                Nouveaux documents partagés
              </Text>
            </View>
            <Switch
              value={notifications.documents}
              onValueChange={() => handleToggle('documents')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Rappels</Text>
              <Text style={styles.optionDescription}>
                Rappels de rendez-vous et échéances
              </Text>
            </View>
            <Switch
              value={notifications.rappels}
              onValueChange={() => handleToggle('rappels')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Canaux de notification</Text>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Notifications par email</Text>
              <Text style={styles.optionDescription}>
                Recevoir les notifications par email
              </Text>
            </View>
            <Switch
              value={notifications.email}
              onValueChange={() => handleToggle('email')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>

          <View style={styles.optionContainer}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>Notifications push</Text>
              <Text style={styles.optionDescription}>
                Recevoir les notifications sur l'appareil
              </Text>
            </View>
            <Switch
              value={notifications.push}
              onValueChange={() => handleToggle('push')}
              trackColor={{ false: colors.lightGray, true: colors.primary }}
            />
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Les notifications vous permettent de rester informé des activités importantes. 
            Vous pouvez modifier ces paramètres à tout moment.
          </Text>
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
    flex: 1,
  },
  section: {
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: 16,
    color: colors.primary,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionInfo: {
    flex: 1,
    marginRight: 16,
  },
  optionTitle: {
    ...typography.body,
    marginBottom: 4,
  },
  optionDescription: {
    ...typography.caption,
    color: colors.gray,
  },
  infoSection: {
    padding: 16,
    backgroundColor: colors.lightGray,
    margin: 16,
    borderRadius: 8,
  },
  infoText: {
    ...typography.caption,
    color: colors.gray,
    textAlign: 'center',
  },
});

export default NotificationsScreen;
