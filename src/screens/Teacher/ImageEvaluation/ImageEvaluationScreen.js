import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TeacherImageEvaluationScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const periods = [
    {
      id: 'morning',
      title: 'École (matin)',
      icon: 'wb-sunny',
      time: '8h00 - 12h00',
    },
    {
      id: 'afternoon',
      title: 'École (après-midi)',
      icon: 'wb-twilight',
      time: '13h30 - 15h30',
    },
  ];

  const handlePeriodSelect = (periodId) => {
    setSelectedPeriod(periodId);
    navigation.navigate('ImageEvaluationDetail', {
      period: periodId,
      context: 'school',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="image" size={40} color="#2196F3" />
        <Text style={styles.title}>Évaluation par Image</Text>
      </View>

      <View style={styles.periodContainer}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.id}
            style={styles.periodCard}
            onPress={() => handlePeriodSelect(period.id)}
          >
            <Icon name={period.icon} size={40} color="#2196F3" />
            <View style={styles.periodInfo}>
              <Text style={styles.periodTitle}>{period.title}</Text>
              <Text style={styles.periodTime}>{period.time}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Comment ça marche ?</Text>
        <Text style={styles.infoText}>
          1. Choisissez la période d'évaluation{'\n'}
          2. Sélectionnez l'image qui correspond le mieux au comportement{'\n'}
          3. Ajoutez des commentaires si nécessaire{'\n'}
          4. Validez votre évaluation
        </Text>
      </View>

      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Légende des Images</Text>
        <View style={styles.legendItem}>
          <View style={[styles.colorDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Très bon comportement</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorDot, { backgroundColor: '#FFC107' }]} />
          <Text style={styles.legendText}>Comportement moyen</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorDot, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>Comportement à améliorer</Text>
        </View>
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
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  periodContainer: {
    padding: 15,
  },
  periodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  periodInfo: {
    flex: 1,
    marginLeft: 15,
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  periodTime: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
  infoContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  legendContainer: {
    margin: 15,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
});

export default TeacherImageEvaluationScreen;
