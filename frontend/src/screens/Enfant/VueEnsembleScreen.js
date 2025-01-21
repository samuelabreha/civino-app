import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const VueEnsembleScreen = ({ navigation }) => {
  const achievements = [
    {
      title: "Super participant",
      description: "Tu as participé à toutes les activités cette semaine !",
      date: "2025-01-20",
      icon: "🌟"
    },
    {
      title: "Ami fidèle",
      description: "Tu as aidé 3 camarades cette semaine",
      date: "2025-01-19",
      icon: "🤝"
    },
    {
      title: "Artiste en herbe",
      description: "Tu as créé une belle œuvre d'art",
      date: "2025-01-18",
      icon: "🎨"
    }
  ];

  const nextActivities = [
    {
      title: "Atelier dessin",
      time: "10:00",
      date: "2025-01-21",
      type: "creative"
    },
    {
      title: "Sport collectif",
      time: "14:30",
      date: "2025-01-21",
      type: "sport"
    },
    {
      title: "Lecture en groupe",
      time: "09:30",
      date: "2025-01-22",
      type: "education"
    }
  ];

  return (
    <View style={styles.container}>
      <Header title="Mon tableau de bord" />
      <ScrollView style={styles.content}>
        {/* Section Humeur */}
        <View style={styles.moodSection}>
          <Text style={styles.sectionTitle}>Comment te sens-tu aujourd'hui ?</Text>
          <View style={styles.moodContainer}>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😊</Text>
              <Text style={styles.moodText}>Content</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😐</Text>
              <Text style={styles.moodText}>Neutre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😔</Text>
              <Text style={styles.moodText}>Triste</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section Réussites */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mes réussites</Text>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementCard}>
              <Text style={styles.achievementIcon}>{achievement.icon}</Text>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>
                  {achievement.description}
                </Text>
                <Text style={styles.achievementDate}>
                  {new Date(achievement.date).toLocaleDateString('fr-FR')}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Section Prochaines activités */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mes prochaines activités</Text>
          {nextActivities.map((activity, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.activityCard}
              onPress={() => navigation.navigate('ActivityDetails', { activity })}
            >
              <View style={styles.activityTimeContainer}>
                <Text style={styles.activityTime}>{activity.time}</Text>
                <Text style={styles.activityDate}>
                  {new Date(activity.date).toLocaleDateString('fr-FR')}
                </Text>
              </View>
              <Text style={styles.activityTitle}>{activity.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  moodSection: {
    marginBottom: 25,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  moodButton: {
    alignItems: 'center',
    padding: 10,
  },
  moodEmoji: {
    fontSize: 40,
    marginBottom: 5,
  },
  moodText: {
    fontSize: 14,
    color: '#666',
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  achievementIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  achievementDate: {
    fontSize: 12,
    color: '#999',
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  activityTimeContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  activityTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
  activityDate: {
    fontSize: 12,
    color: '#666',
  },
  activityTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default VueEnsembleScreen;
