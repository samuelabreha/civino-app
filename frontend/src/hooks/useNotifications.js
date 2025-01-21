import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { notificationService } from '../services/notifications';

export const useNotifications = () => {
  const [permission, setPermission] = useState(false);
  const [token, setToken] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Demander la permission
        const hasPermission = await notificationService.requestUserPermission();
        setPermission(hasPermission);

        if (hasPermission) {
          // Obtenir le token FCM
          const fcmToken = await notificationService.getFCMToken();
          setToken(fcmToken);

          // Enregistrer pour les messages distants (iOS uniquement)
          if (Platform.OS === 'ios') {
            await notificationService.registerForRemoteMessages();
          }
        }
      } catch (error) {
        console.error('Error initializing notifications:', error);
      }
    };

    initialize();

    // Écouter les notifications en premier plan
    const unsubscribe = notificationService.onMessage(remoteMessage => {
      setNotification(remoteMessage);
    });

    // Écouter les notifications en arrière-plan
    notificationService.onBackgroundMessage(async remoteMessage => {
      setNotification(remoteMessage);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const scheduleNotification = async (notificationData) => {
    try {
      await notificationService.scheduleLocalNotification(notificationData);
      return true;
    } catch (error) {
      console.error('Error scheduling notification:', error);
      return false;
    }
  };

  const cancelNotification = async (notificationId) => {
    try {
      await notificationService.cancelLocalNotification(notificationId);
      return true;
    } catch (error) {
      console.error('Error canceling notification:', error);
      return false;
    }
  };

  const cancelAllNotifications = async () => {
    try {
      await notificationService.cancelAllLocalNotifications();
      return true;
    } catch (error) {
      console.error('Error canceling all notifications:', error);
      return false;
    }
  };

  const scheduleEvaluationReminder = async (evaluationData) => {
    try {
      await notificationService.scheduleEvaluationReminder(evaluationData);
      return true;
    } catch (error) {
      console.error('Error scheduling evaluation reminder:', error);
      return false;
    }
  };

  const sendDocumentNotification = async (documentData) => {
    try {
      await notificationService.sendDocumentNotification(documentData);
      return true;
    } catch (error) {
      console.error('Error sending document notification:', error);
      return false;
    }
  };

  const sendProgressNotification = async (progressData) => {
    try {
      await notificationService.sendProgressNotification(progressData);
      return true;
    } catch (error) {
      console.error('Error sending progress notification:', error);
      return false;
    }
  };

  return {
    permission,
    token,
    notification,
    scheduleNotification,
    cancelNotification,
    cancelAllNotifications,
    scheduleEvaluationReminder,
    sendDocumentNotification,
    sendProgressNotification,
  };
};
