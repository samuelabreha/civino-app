import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

const NOTIFICATION_CHANNEL_ID = 'civino_default_channel';
const FCM_TOKEN_KEY = '@fcm_token';

class NotificationService {
  constructor() {
    this.createDefaultChannel();
    this.configurePushNotifications();
  }

  createDefaultChannel() {
    PushNotification.createChannel(
      {
        channelId: NOTIFICATION_CHANNEL_ID,
        channelName: 'Notifications par défaut',
        channelDescription: 'Canal pour les notifications générales',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel ${created ? 'created' : 'available'}`)
    );
  }

  configurePushNotifications() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish();
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      return true;
    }
    return false;
  }

  async getFCMToken() {
    try {
      const storedToken = await AsyncStorage.getItem(FCM_TOKEN_KEY);
      
      if (!storedToken) {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          await AsyncStorage.setItem(FCM_TOKEN_KEY, fcmToken);
          return fcmToken;
        }
      }
      
      return storedToken;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }

  async registerForRemoteMessages() {
    await messaging().registerDeviceForRemoteMessages();
  }

  onMessage(callback) {
    return messaging().onMessage(callback);
  }

  onBackgroundMessage(callback) {
    return messaging().setBackgroundMessageHandler(callback);
  }

  async scheduleLocalNotification({
    title,
    message,
    date,
    repeatType = null,
    channelId = NOTIFICATION_CHANNEL_ID,
  }) {
    PushNotification.localNotificationSchedule({
      channelId,
      title,
      message,
      date,
      repeatType,
      allowWhileIdle: true,
      importance: 'high',
      playSound: true,
      soundName: 'default',
    });
  }

  async cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

  async cancelLocalNotification(notificationId) {
    PushNotification.cancelLocalNotification(notificationId);
  }

  // Méthodes spécifiques pour les rappels d'évaluation
  async scheduleEvaluationReminder(evaluationData) {
    const { childName, date, type } = evaluationData;
    await this.scheduleLocalNotification({
      title: 'Rappel d'évaluation',
      message: `N'oubliez pas l'évaluation de ${childName} pour ${type}`,
      date: new Date(date),
      channelId: 'evaluation_reminders',
    });
  }

  // Méthodes spécifiques pour les notifications de documents
  async sendDocumentNotification(documentData) {
    const { title, description } = documentData;
    PushNotification.localNotification({
      channelId: 'document_notifications',
      title: 'Nouveau document',
      message: `${title}: ${description}`,
      importance: 'high',
      playSound: true,
    });
  }

  // Méthodes spécifiques pour les notifications de progression
  async sendProgressNotification(progressData) {
    const { childName, achievement } = progressData;
    PushNotification.localNotification({
      channelId: 'progress_notifications',
      title: 'Progrès détecté!',
      message: `${childName} a ${achievement}`,
      importance: 'high',
      playSound: true,
    });
  }
}

export const notificationService = new NotificationService();
