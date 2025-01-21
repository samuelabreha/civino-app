import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ReferentHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'questionnaire',
      title: t('referent.questionnaire'),
      icon: 'clipboard-text',
      screen: 'ReferentQuestionnaire',
      color: '#4CAF50',
    },
    {
      id: 'progression',
      title: t('referent.progression'),
      icon: 'chart-line',
      screen: 'ReferentProgression',
      color: '#2196F3',
    },
    {
      id: 'statistics',
      title: t('referent.statistics'),
      icon: 'chart-bar',
      screen: 'ReferentStatistics',
      color: '#FF9800',
    },
    {
      id: 'overview',
      title: t('referent.overview'),
      icon: 'view-dashboard',
      screen: 'ReferentOverview',
      color: '#9C27B0',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('referent.welcome')}</Text>
        <Text style={styles.subtitle}>{t('referent.selectOption')}</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={32} color="#FFFFFF" />
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Icon name="chevron-right" size={24} color="#666" />
            </View>
          </TouchableOpacity>
        ))}
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
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  iconContainer: {
    padding: 20,
    alignItems: 'center',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});

export default ReferentHomeScreen;
