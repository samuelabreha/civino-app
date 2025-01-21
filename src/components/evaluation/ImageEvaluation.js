import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PERIODS = {
  MORNING: 'morning',
  AFTERNOON: 'afternoon',
};

const EMOTIONS = [
  {
    id: 'very_happy',
    icon: '😄',
    value: 5,
    color: '#4CAF50',
  },
  {
    id: 'happy',
    icon: '🙂',
    value: 4,
    color: '#8BC34A',
  },
  {
    id: 'neutral',
    icon: '😐',
    value: 3,
    color: '#FFC107',
  },
  {
    id: 'sad',
    icon: '🙁',
    value: 2,
    color: '#FF9800',
  },
  {
    id: 'very_sad',
    icon: '😢',
    value: 1,
    color: '#F44336',
  },
];

const CONTEXTS = {
  SCHOOL: 'school',
  COMMUNITY: 'community',
  HOME: 'home',
};

const ImageEvaluation = ({ onSave }) => {
  const { t } = useTranslation();
  const [selectedEmotions, setSelectedEmotions] = useState({});
  const [selectedContext, setSelectedContext] = useState(CONTEXTS.SCHOOL);

  const handleEmotionSelect = (period, emotion) => {
    setSelectedEmotions(prev => ({
      ...prev,
      [period]: emotion,
    }));
  };

  const renderEmotionSelector = (period) => (
    <View style={styles.emotionContainer}>
      <Text style={styles.periodTitle}>
        {t(`evaluation.periods.${period}`)}
      </Text>
      <View style={styles.emotionsRow}>
        {EMOTIONS.map((emotion) => (
          <TouchableOpacity
            key={emotion.id}
            style={[
              styles.emotionButton,
              selectedEmotions[period]?.id === emotion.id && {
                backgroundColor: emotion.color,
                transform: [{ scale: 1.1 }],
              },
            ]}
            onPress={() => handleEmotionSelect(period, emotion)}
          >
            <Text style={styles.emotionIcon}>{emotion.icon}</Text>
            <Text style={styles.emotionLabel}>
              {t(`evaluation.emotions.${emotion.id}`)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderContextSelector = () => (
    <View style={styles.contextContainer}>
      {Object.values(CONTEXTS).map((context) => (
        <TouchableOpacity
          key={context}
          style={[
            styles.contextButton,
            selectedContext === context && styles.contextButtonActive,
          ]}
          onPress={() => setSelectedContext(context)}
        >
          <Icon
            name={context === CONTEXTS.SCHOOL ? 'school' : context === CONTEXTS.COMMUNITY ? 'home-group' : 'home'}
            size={24}
            color={selectedContext === context ? '#FFFFFF' : '#666666'}
          />
          <Text style={[
            styles.contextButtonText,
            selectedContext === context && styles.contextButtonTextActive,
          ]}>
            {t(`contexts.${context}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const handleSave = () => {
    const evaluationData = {
      context: selectedContext,
      date: new Date().toISOString(),
      emotions: selectedEmotions,
    };
    onSave?.(evaluationData);
  };

  return (
    <ScrollView style={styles.container}>
      {renderContextSelector()}
      <View style={styles.evaluationContainer}>
        {renderEmotionSelector(PERIODS.MORNING)}
        {renderEmotionSelector(PERIODS.AFTERNOON)}
      </View>
      <TouchableOpacity
        style={[
          styles.saveButton,
          (!selectedEmotions[PERIODS.MORNING] || !selectedEmotions[PERIODS.AFTERNOON]) && styles.saveButtonDisabled,
        ]}
        onPress={handleSave}
        disabled={!selectedEmotions[PERIODS.MORNING] || !selectedEmotions[PERIODS.AFTERNOON]}
      >
        <Text style={styles.saveButtonText}>
          {t('evaluation.save')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    minWidth: 100,
    justifyContent: 'center',
  },
  contextButtonActive: {
    backgroundColor: '#2196F3',
  },
  contextButtonText: {
    marginLeft: 8,
    color: '#666666',
  },
  contextButtonTextActive: {
    color: '#FFFFFF',
  },
  evaluationContainer: {
    padding: 15,
  },
  emotionContainer: {
    marginBottom: 20,
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emotionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  emotionButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    width: (Dimensions.get('window').width - 60) / 5,
    marginBottom: 10,
  },
  emotionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  emotionLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 25,
    margin: 15,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageEvaluation;
