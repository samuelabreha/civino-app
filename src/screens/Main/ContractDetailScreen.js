import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { firebaseService } from '../../services/firebase.service';
import { generatePDF } from '../../utils/pdfGenerator';

const ParticipantSelector = ({ participants, onSelect, onRemove }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const searchUsers = async (text) => {
    setSearchText(text);
    if (text.length >= 2) {
      const results = await firebaseService.searchUsers(text);
      setSuggestions(results.filter(user => 
        !participants.some(p => p.id === user.id)
      ));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <View style={styles.participantSelector}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un participant..."
        value={searchText}
        onChangeText={searchUsers}
      />
      
      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          {suggestions.map(user => (
            <TouchableOpacity
              key={user.id}
              style={styles.suggestionItem}
              onPress={() => {
                onSelect(user);
                setSearchText('');
                setSuggestions([]);
              }}
            >
              <Text style={styles.suggestionText}>{user.name}</Text>
              <Text style={styles.suggestionEmail}>{user.email}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.selectedParticipants}>
        {participants.map(participant => (
          <View key={participant.id} style={styles.participantChip}>
            <Text style={styles.participantChipText}>{participant.name}</Text>
            <TouchableOpacity
              style={styles.removeParticipant}
              onPress={() => onRemove(participant.id)}
            >
              <Icon name="close" size={16} color="#666" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const ContractDetailScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { id, mode } = route.params;
  const user = useSelector(state => state.auth.user);
  
  const [contract, setContract] = useState({
    title: '',
    description: '',
    participants: [],
    rules: [],
    expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Default 1 week
    status: 'pending',
  });
  
  const [loading, setLoading] = useState(mode !== 'create');
  const [saving, setSaving] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newRule, setNewRule] = useState('');

  useEffect(() => {
    if (mode !== 'create') {
      fetchContract();
    }
  }, []);

  const fetchContract = async () => {
    try {
      const data = await firebaseService.getContractById(id);
      setContract(data);
    } catch (error) {
      console.error('Error fetching contract:', error);
      Alert.alert(
        t('common.error'),
        t('contract.errorLoading'),
        [{ text: t('common.ok'), onPress: () => navigation.goBack() }]
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddRule = () => {
    if (newRule.trim()) {
      setContract(prev => ({
        ...prev,
        rules: [...prev.rules, newRule.trim()],
      }));
      setNewRule('');
    }
  };

  const handleRemoveRule = (index) => {
    setContract(prev => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index),
    }));
  };

  const handleAddParticipant = (participant) => {
    setContract(prev => ({
      ...prev,
      participants: [...prev.participants, participant],
    }));
  };

  const handleRemoveParticipant = (participantId) => {
    setContract(prev => ({
      ...prev,
      participants: prev.participants.filter(p => p.id !== participantId),
    }));
  };

  const validateContract = () => {
    if (!contract.title.trim()) {
      Alert.alert(t('common.error'), t('contract.errorNoTitle'));
      return false;
    }
    if (!contract.description.trim()) {
      Alert.alert(t('common.error'), t('contract.errorNoDescription'));
      return false;
    }
    if (contract.participants.length < 2) {
      Alert.alert(t('common.error'), t('contract.errorMinParticipants'));
      return false;
    }
    if (contract.rules.length === 0) {
      Alert.alert(t('common.error'), t('contract.errorNoRules'));
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateContract()) return;

    try {
      setSaving(true);
      const contractData = {
        ...contract,
        createdBy: user.uid,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      if (mode === 'create') {
        await firebaseService.createContract(contractData);
      } else {
        await firebaseService.updateContract(id, contractData);
      }

      // Generate PDF version
      const pdfUrl = await generatePDF(contractData);
      
      // Send notifications to participants
      await Promise.all(contract.participants.map(participant =>
        firebaseService.sendNotification({
          userId: participant.id,
          type: 'contract',
          title: t('contract.newContractNotification'),
          message: t('contract.newContractMessage', { title: contract.title }),
          data: { contractId: id },
        })
      ));

      Alert.alert(
        t('common.success'),
        t('contract.saveSuccess'),
        [{ text: t('common.ok'), onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      console.error('Error saving contract:', error);
      Alert.alert(t('common.error'), t('contract.saveError'));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.label}>{t('contract.title')}</Text>
          <TextInput
            style={styles.input}
            value={contract.title}
            onChangeText={text => setContract(prev => ({ ...prev, title: text }))}
            placeholder={t('contract.titlePlaceholder')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{t('contract.description')}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={contract.description}
            onChangeText={text => setContract(prev => ({ ...prev, description: text }))}
            placeholder={t('contract.descriptionPlaceholder')}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{t('contract.participants')}</Text>
          <ParticipantSelector
            participants={contract.participants}
            onSelect={handleAddParticipant}
            onRemove={handleRemoveParticipant}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{t('contract.rules')}</Text>
          <View style={styles.rulesContainer}>
            {contract.rules.map((rule, index) => (
              <View key={index} style={styles.ruleItem}>
                <Text style={styles.ruleText}>{rule}</Text>
                <TouchableOpacity
                  style={styles.removeRule}
                  onPress={() => handleRemoveRule(index)}
                >
                  <Icon name="close" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.addRuleContainer}>
            <TextInput
              style={[styles.input, styles.ruleInput]}
              value={newRule}
              onChangeText={setNewRule}
              placeholder={t('contract.rulePlaceholder')}
            />
            <TouchableOpacity
              style={styles.addRuleButton}
              onPress={handleAddRule}
            >
              <Icon name="plus" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{t('contract.expiryDate')}</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Icon name="calendar" size={24} color="#2196F3" />
            <Text style={styles.dateText}>
              {contract.expiryDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={contract.expiryDate}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setContract(prev => ({ ...prev, expiryDate: selectedDate }));
              }
            }}
          />
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.saveButton, saving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Icon name="content-save" size={24} color="#FFFFFF" />
              <Text style={styles.saveButtonText}>
                {t('common.save')}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  participantSelector: {
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  suggestionsContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginTop: 4,
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
  suggestionEmail: {
    fontSize: 14,
    color: '#666',
  },
  selectedParticipants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  participantChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  participantChipText: {
    fontSize: 14,
    color: '#2196F3',
    marginRight: 4,
  },
  removeParticipant: {
    padding: 2,
  },
  rulesContainer: {
    marginBottom: 10,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  ruleText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  removeRule: {
    padding: 4,
  },
  addRuleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ruleInput: {
    flex: 1,
    marginRight: 10,
  },
  addRuleButton: {
    backgroundColor: '#2196F3',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  saveButtonDisabled: {
    backgroundColor: '#9E9E9E',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ContractDetailScreen;
