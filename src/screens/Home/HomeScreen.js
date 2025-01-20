import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const QuickActionButton = ({ title, icon, color, onPress }) => (
  <TouchableOpacity
    style={[styles.quickActionButton, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Icon name={icon} size={30} color="#FFFFFF" />
    <Text style={styles.quickActionText}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const profile = useSelector((state) => state.auth.profile);

  const quickActions = [
    {
      title: t('evaluation.daily'),
      icon: 'clipboard-text',
      color: '#4CAF50',
      onPress: () => navigation.navigate('Questionnaires'),
    },
    {
      title: t('documents.title'),
      icon: 'file-document',
      color: '#2196F3',
      onPress: () => navigation.navigate('Documents'),
    },
    {
      title: t('calendar.title'),
      icon: 'calendar',
      color: '#FF9800',
      onPress: () => navigation.navigate('Calendar'),
    },
    {
      title: t('statistics.title'),
      icon: 'chart-bar',
      color: '#9C27B0',
      onPress: () => navigation.navigate('Statistics'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>
            {t('common.welcome')}
          </Text>
          <Text style={styles.profileText}>
            {profile ? t(`profiles.${profile}`) : ''}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name="cog" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.quickActionsContainer}>
        {quickActions.map((action, index) => (
          <QuickActionButton
            key={index}
            title={action.title}
            icon={action.icon}
            color={action.color}
            onPress={action.onPress}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('evaluation.recent')}</Text>
        {/* Liste des évaluations récentes */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('documents.recent')}</Text>
        {/* Liste des documents récents */}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  settingsButton: {
    padding: 10,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: '48%',
    aspectRatio: 1.5,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  quickActionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
});

export default HomeScreen;
