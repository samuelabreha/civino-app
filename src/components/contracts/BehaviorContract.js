import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const BehaviorContract = ({ contract, onEdit, onValidate }) => {
  const { t } = useTranslation();

  const getStatusColor = () => {
    switch (contract.status) {
      case 'completed':
        return '#4CAF50';
      case 'in_progress':
        return '#FFA726';
      case 'not_started':
        return '#EF5350';
      default:
        return '#999';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.statusDot, { backgroundColor: getStatusColor() }]} />
        <Text style={styles.title}>{contract.title}</Text>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="pencil" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>{contract.description}</Text>
        
        <View style={styles.objectivesContainer}>
          <Text style={styles.sectionTitle}>{t('contract.objectives')}</Text>
          {contract.objectives.map((objective, index) => (
            <View key={index} style={styles.objectiveItem}>
              <Icon
                name={objective.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={24}
                color={objective.completed ? '#4CAF50' : '#666'}
              />
              <Text style={styles.objectiveText}>{objective.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>{t('contract.startDate')}:</Text>
          <Text style={styles.dateText}>{contract.startDate}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>{t('contract.endDate')}:</Text>
          <Text style={styles.dateText}>{contract.endDate}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.validateButton, contract.status === 'completed' && styles.completedButton]}
        onPress={onValidate}
        disabled={contract.status === 'completed'}
      >
        <Text style={styles.validateButtonText}>
          {contract.status === 'completed'
            ? t('contract.completed')
            : t('contract.validate')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  objectivesContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  objectiveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  objectiveText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  dateLabel: {
    fontSize: 14,
    color: '#666',
    width: 100,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  validateButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: '#4CAF50',
  },
  validateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BehaviorContract;
