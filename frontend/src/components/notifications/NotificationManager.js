import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNotifications } from '../../hooks/useNotifications';
import { useSelector } from 'react-redux';

export const NotificationManager = () => {
  const { 
    scheduleEvaluationReminder,
    sendDocumentNotification,
    sendProgressNotification
  } = useNotifications();

  const evaluations = useSelector(state => state.evaluations.upcoming);
  const documents = useSelector(state => state.documents.recent);
  const progress = useSelector(state => state.progress.recent);

  useEffect(() => {
    // Gérer les rappels d'évaluation
    evaluations.forEach(evaluation => {
      const reminderDate = new Date(evaluation.date);
      reminderDate.setHours(reminderDate.getHours() - 24); // Rappel 24h avant

      scheduleEvaluationReminder({
        childName: evaluation.childName,
        date: reminderDate,
        type: evaluation.type
      });
    });
  }, [evaluations]);

  useEffect(() => {
    // Gérer les notifications de nouveaux documents
    documents.forEach(document => {
      if (document.isNew) {
        sendDocumentNotification({
          title: document.title,
          description: document.description
        });
      }
    });
  }, [documents]);

  useEffect(() => {
    // Gérer les notifications de progrès
    progress.forEach(progressItem => {
      if (progressItem.isSignificant) {
        sendProgressNotification({
          childName: progressItem.childName,
          achievement: progressItem.achievement
        });
      }
    });
  }, [progress]);

  return null; // Composant invisible
};

const styles = StyleSheet.create({
  container: {
    display: 'none'
  }
});
