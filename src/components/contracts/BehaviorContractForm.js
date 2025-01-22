import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const BehaviorContractForm = ({ onSave, initialData }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [startDate, setStartDate] = useState(initialData?.startDate ? new Date(initialData.startDate) : new Date());
  const [endDate, setEndDate] = useState(initialData?.endDate ? new Date(initialData.endDate) : new Date());
  const [goals, setGoals] = useState(initialData?.goals || []);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [context, setContext] = useState(initialData?.context || 'school');
  const [dailyValidation, setDailyValidation] = useState(initialData?.dailyValidation || false);

  const handleAddGoal = () => {
    setGoals([...goals, { id: Date.now(), text: '', completed: false }]);
  };

  const handleUpdateGoal = (id, text) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, text } : goal
    ));
  };

  const handleToggleGoal = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleSave = () => {
    const contractData = {
      title,
      description,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      goals,
      context,
      dailyValidation,
      createdAt: new Date().toISOString(),
      status: 'active',
    };
    onSave(contractData);
  };

  const renderGoalItem = (goal) => (
    <View key={goal.id} style={styles.goalItem}>
      <TouchableOpacity
        style={styles.goalCheckbox}
        onPress={() => handleToggleGoal(goal.id)}
      >
        <Icon
          name={goal.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={24}
          color={goal.completed ? '#4CAF50' : '#666666'}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.goalInput}
        value={goal.text}
        onChangeText={(text) => handleUpdateGoal(goal.id, text)}
        placeholder={t('contracts.goalPlaceholder')}
        multiline
      />
      <TouchableOpacity
        style={styles.deleteGoalButton}
        onPress={() => handleDeleteGoal(goal.id)}
      >
        <Icon name="delete" size={24} color="#F44336" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>{t('contracts.title')}</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder={t('contracts.titlePlaceholder')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>{t('contracts.description')}</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder={t('contracts.descriptionPlaceholder')}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>{t('contracts.context')}</Text>
        <View style={styles.contextButtons}>
          {['school', 'community', 'home'].map((ctx) => (
            <TouchableOpacity
              key={ctx}
              style={[
                styles.contextButton,
                context === ctx && styles.contextButtonActive,
              ]}
              onPress={() => setContext(ctx)}
            >
              <Icon
                name={ctx === 'school' ? 'school' : ctx === 'community' ? 'home-group' : 'home'}
                size={24}
                color={context === ctx ? '#FFFFFF' : '#666666'}
              />
              <Text
                style={[
                  styles.contextButtonText,
                  context === ctx && styles.contextButtonTextActive,
                ]}
              >
                {t(`contexts.${ctx}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>{t('contracts.period')}</Text>
        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowStartDatePicker(true)}
          >
            <Icon name="calendar" size={24} color="#2196F3" />
            <Text style={styles.dateText}>
              {format(startDate, 'dd MMMM yyyy', { locale: fr })}
            </Text>
          </TouchableOpacity>
          <Text style={styles.dateText}>{t('contracts.to')}</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowEndDatePicker(true)}
          >
            <Icon name="calendar" size={24} color="#2196F3" />
            <Text style={styles.dateText}>
              {format(endDate, 'dd MMMM yyyy', { locale: fr })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.validationContainer}>
          <Text style={styles.label}>{t('contracts.dailyValidation')}</Text>
          <Switch
            value={dailyValidation}
            onValueChange={setDailyValidation}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={dailyValidation ? '#2196F3' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>{t('contracts.goals')}</Text>
        {goals.map(renderGoalItem)}
        <TouchableOpacity
          style={styles.addGoalButton}
          onPress={handleAddGoal}
        >
          <Icon name="plus-circle" size={24} color="#2196F3" />
          <Text style={styles.addGoalButtonText}>
            {t('contracts.addGoal')}
          </Text>
        </TouchableOpacity>
      </View>

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowStartDatePicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false);
            if (selectedDate) setEndDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity
        style={[
          styles.saveButton,
          (!title || goals.length === 0) && styles.saveButtonDisabled,
        ]}
        onPress={handleSave}
        disabled={!title || goals.length === 0}
      >
        <Text style={styles.saveButtonText}>
          {t('contracts.save')}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  contextButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    flex: 1,
    marginHorizontal: 5,
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    flex: 1,
    marginHorizontal: 5,
  },
  dateText: {
    marginLeft: 8,
    fontSize: 16,
  },
  validationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
  },
  goalCheckbox: {
    padding: 5,
  },
  goalInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  deleteGoalButton: {
    padding: 5,
  },
  addGoalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginTop: 10,
  },
  addGoalButtonText: {
    marginLeft: 8,
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
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

export default BehaviorContractForm;
