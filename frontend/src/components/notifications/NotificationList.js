import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationItem = ({ notification, onPress }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'evaluation':
        return 'assessment';
      case 'document':
        return 'description';
      case 'progress':
        return 'trending-up';
      default:
        return 'notifications';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        !notification.read && styles.unreadNotification,
      ]}
      onPress={() => onPress(notification)}
    >
      <View style={styles.iconContainer}>
        <Icon name={getIcon()} size={24} color="#4A90E2" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message} numberOfLines={2}>
          {notification.message}
        </Text>
        <Text style={styles.timestamp}>
          {format(new Date(notification.timestamp), 'PPp', { locale: fr })}
        </Text>
      </View>
      {!notification.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
};

export const NotificationList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const notifications = useSelector(state => state.notifications.items);
  const dispatch = useDispatch();

  const onRefresh = async () => {
    setRefreshing(true);
    // Actualiser les notifications
    try {
      // await dispatch(fetchNotifications());
    } catch (error) {
      console.error('Error refreshing notifications:', error);
    }
    setRefreshing(false);
  };

  const handleNotificationPress = (notification) => {
    if (!notification.read) {
      // Marquer comme lu
      // dispatch(markNotificationAsRead(notification.id));
    }

    // Navigation basée sur le type
    switch (notification.type) {
      case 'evaluation':
        // navigation.navigate('Evaluation', { id: notification.data.evaluationId });
        break;
      case 'document':
        // navigation.navigate('Document', { id: notification.data.documentId });
        break;
      case 'progress':
        // navigation.navigate('Progress', { id: notification.data.progressId });
        break;
      default:
        break;
    }
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Icon name="notifications-none" size={48} color="#999" />
      <Text style={styles.emptyStateText}>
        Aucune notification pour le moment
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onPress={handleNotificationPress}
          />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    flexGrow: 1,
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  unreadNotification: {
    backgroundColor: '#f0f7ff',
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
    marginLeft: 8,
    alignSelf: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    marginTop: 16,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
