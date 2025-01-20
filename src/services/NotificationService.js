import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

class NotificationService {
  constructor() {
    this.configure();
    this.createDefaultChannels();
  }

  async configure() {
    PushNotification.configure({
      onRegister: async function(token) {
        await AsyncStorage.setItem('pushToken', token.token);
      },
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: 'default-channel',
        channelName: 'Default Channel',
        channelDescription: 'Canal par défaut pour les notifications',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel created: ${created}`),
    );
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const token = await messaging().getToken();
      await AsyncStorage.setItem('fcmToken', token);
      return token;
    }

    return null;
  }

  async scheduleNotification(title, message, date) {
    PushNotification.localNotificationSchedule({
      channelId: 'default-channel',
      title: title,
      message: message,
      date: date,
      allowWhileIdle: true,
    });
  }

  async cancelAllNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

  async getBadgeCount() {
    return await AsyncStorage.getItem('badgeCount') || '0';
  }

  async setBadgeCount(count) {
    await AsyncStorage.setItem('badgeCount', count.toString());
    PushNotification.setApplicationIconBadgeNumber(count);
  }
}

export default new NotificationService();
