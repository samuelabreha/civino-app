import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusInputScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedStatus, setSelectedStatus] = useState(null);

  const statusOptions = [
    { id: 'child', title: t('status.child'), icon: 'account-child' },
    { id: 'teacher', title: t('status.teacher'), icon: 'teach' },
    { id: 'monitor', title: t('status.monitor'), icon: 'account-tie' },
    { id: 'parent', title: t('status.parent'), icon: 'account-child-circle' },
    { id: 'admin', title: t('status.admin'), icon: 'shield-account' },
  ];

  const handleNext = () => {
    if (selectedStatus) {
      navigation.navigate('NameInput', { status: selectedStatus });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('status.selectTitle')}</Text>
        <Text style={styles.subtitle}>{t('status.selectDescription')}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {statusOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionItem,
              selectedStatus === option.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedStatus(option.id)}
          >
            <Icon
              name={option.icon}
              size={32}
              color={selectedStatus === option.id ? '#2196F3' : '#666'}
            />
            <Text style={[
              styles.optionText,
              selectedStatus === option.id && styles.selectedOptionText,
            ]}>
              {option.title}
            </Text>
            {selectedStatus === option.id && (
              <Icon name="check-circle" size={24} color="#2196F3" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !selectedStatus && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!selectedStatus}
      >
        <Text style={styles.nextButtonText}>{t('common.next')}</Text>
        <Icon name="arrow-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  optionsContainer: {
    padding: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#2196F3',
    backgroundColor: '#F5F5F5',
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
  selectedOptionText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
  nextButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default StatusInputScreen;
