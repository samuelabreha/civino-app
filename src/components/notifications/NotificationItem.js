import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const NotificationItem = ({ notification, onPress, onDismiss }) => {
  const { t } = useTranslation();

  const getNotificationIcon = () => {
    switch (notification.type) {
      case 'questionnaire':
        return 'clipboard-text';
      case 'contract':
        return 'file-document';
      case 'message':
        return 'message';
      case 'reminder':
        return 'bell';
      case 'update':
        return 'update';
      default:
        return 'bell';
    }
  };

  const getNotificationColor = () => {
    switch (notification.priority) {
      case 'high':
        return '#EF5350';
      case 'medium':
        return '#FFA726';
      case 'low':
        return '#4CAF50';
      default:
        return '#2196F3';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        !notification.read && styles.unread
      ]}
      onPress={onPress}
    >
      <View style={[
        styles.iconContainer,
        { backgroundColor: `${getNotificationColor()}20` }
      ]}>
        <Icon
          name={getNotificationIcon()}
          size={24}
          color={getNotificationColor()}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message} numberOfLines={2}>
          {notification.message}
        </Text>
        <Text style={styles.time}>{notification.time}</Text>
      </View>

      {!notification.read && (
        <View style={[
          styles.unreadDot,
          { backgroundColor: getNotificationColor() }
        ]} />
      )}

      <TouchableOpacity
        style={styles.dismissButton}
        onPress={onDismiss}
      >
        <Icon name="close" size={20} color="#666" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  unread: {
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  dismissButton: {
    padding: 5,
  },
});

export default NotificationItem;
