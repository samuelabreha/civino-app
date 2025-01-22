import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MonitorImageEvaluationScreen = ({ navigation }) => {
  const [selectedContext, setSelectedContext] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const contexts = [
    {
      id: 'school',
      title: 'École',
      icon: 'school',
      periods: [
        { id: 'morning', title: 'Matin', time: '8h00 - 12h00' },
        { id: 'afternoon', title: 'Après-midi', time: '13h30 - 15h30' },
      ],
    },
    {
      id: 'center',
      title: 'Maison de Quartier',
      icon: 'location-city',
      periods: [
        { id: 'morning', title: 'Matin', time: '9h00 - 12h00' },
        { id: 'afternoon', title: 'Après-midi', time: '14h00 - 17h00' },
      ],
    },
    {
      id: 'home',
      title: 'Maison',
      icon: 'home',
      periods: [
        { id: 'morning', title: 'Matin', time: '7h00 - 8h00' },
        { id: 'afterSchool', title: 'Après l\'école', time: '16h00 - 19h00' },
      ],
    },
  ];

  const handleContextSelect = (contextId) => {
    setSelectedContext(contextId);
    setSelectedPeriod(null);
  };

  const handlePeriodSelect = (periodId) => {
    setSelectedPeriod(periodId);
    navigation.navigate('ImageEvaluationDetail', {
      context: selectedContext,
      period: periodId,
    });
  };

  const selectedContextData = contexts.find((c) => c.id === selectedContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="image" size={40} color="#2196F3" />
        <Text style={styles.title}>Évaluation par Image</Text>
      </View>

      <View style={styles.contextContainer}>
        <Text style={styles.sectionTitle}>Sélectionner le Contexte</Text>
        <View style={styles.contextList}>
          {contexts.map((context) => (
            <TouchableOpacity
              key={context.id}
              style={[
                styles.contextCard,
                selectedContext === context.id && styles.contextCardSelected,
              ]}
              onPress={() => handleContextSelect(context.id)}
            >
              <Icon
                name={context.icon}
                size={32}
                color={selectedContext === context.id ? '#FFFFFF' : '#2196F3'}
              />
              <Text
                style={[
                  styles.contextLabel,
                  selectedContext === context.id && styles.contextLabelSelected,
                ]}
              >
                {context.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {selectedContext && (
        <View style={styles.periodContainer}>
          <Text style={styles.sectionTitle}>Sélectionner la Période</Text>
          {selectedContextData.periods.map((period) => (
            <TouchableOpacity
              key={period.id}
              style={styles.periodCard}
              onPress={() => handlePeriodSelect(period.id)}
            >
              <Icon
                name={period.id === 'morning' ? 'wb-sunny' : 'wb-twilight'}
                size={32}
                color="#2196F3"
              />
              <View style={styles.periodInfo}>
                <Text style={styles.periodTitle}>
                  {selectedContextData.title} - {period.title}
                </Text>
                <Text style={styles.periodTime}>{period.time}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Comment ça marche ?</Text>
        <Text style={styles.infoText}>
          1. Choisissez le contexte d'évaluation{'\n'}
          2. Sélectionnez la période{'\n'}
          3. Choisissez l'image qui correspond le mieux au comportement{'\n'}
          4. Ajoutez des commentaires si nécessaire
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
  contextContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contextList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contextCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  contextCardSelected: {
    backgroundColor: '#2196F3',
  },
  contextLabel: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 5,
    textAlign: 'center',
  },
  contextLabelSelected: {
    color: '#FFFFFF',
  },
  periodContainer: {
    padding: 15,
  },
  periodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
    fontSize: 16,
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
    fontSize: 16,
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

export default MonitorImageEvaluationScreen;
