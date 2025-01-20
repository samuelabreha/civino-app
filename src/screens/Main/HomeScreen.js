import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebaseService } from '../../services/firebase.service';

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const [refreshing, setRefreshing] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    questionnaires: [],
    contracts: [],
    notifications: [],
    upcomingEvents: [],
  });

  const fetchDashboardData = async () => {
    try {
      const [questionnaires, contracts, notifications, events] = await Promise.all([
        firebaseService.getQuestionnaires({ limit: 5 }),
        firebaseService.getContracts({ limit: 5 }),
        firebaseService.getNotifications(user.uid),
        firebaseService.getEvents({ upcoming: true, limit: 5 }),
      ]);

      setDashboardData({
        questionnaires,
        contracts,
        notifications,
        upcomingEvents: events,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const renderSection = (title, items, icon, onPress) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Icon name={icon} size={24} color="#2196F3" />
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.seeAllButton}>{t('common.seeAll')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContent}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <TouchableOpacity
              key={item.id || index}
              style={styles.itemCard}
              onPress={() => onPress(item)}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription} numberOfLines={2}>
                {item.description}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>{t('common.noItems')}</Text>
        )}
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          {t('home.welcome', { name: user?.firstName })}
        </Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Icon name="bell" size={24} color="#2196F3" />
          {dashboardData.notifications.length > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>
                {dashboardData.notifications.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {renderSection(
        t('home.questionnaires'),
        dashboardData.questionnaires,
        'clipboard-text',
        () => navigation.navigate('Questionnaires')
      )}

      {renderSection(
        t('home.contracts'),
        dashboardData.contracts,
        'file-document',
        () => navigation.navigate('Contracts')
      )}

      {renderSection(
        t('home.upcomingEvents'),
        dashboardData.upcomingEvents,
        'calendar',
        () => navigation.navigate('Calendar')
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  notificationButton: {
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  seeAllButton: {
    color: '#2196F3',
    fontSize: 14,
  },
  sectionContent: {
    marginTop: 10,
  },
  itemCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
