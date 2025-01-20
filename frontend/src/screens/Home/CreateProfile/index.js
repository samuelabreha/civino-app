import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
import { BehaviorContract } from '../../../components/contracts/BehaviorContract';
import { ImageEvaluation } from '../../../components/questionnaire/ImageEvaluation';
import { api } from '../../../services/api';

const CreateProfile = ({ navigation }) => {
  const [formData, setFormData] = useState({
    status: '',
    lastName: '',
    firstName: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await api.post('/profiles', formData);
      navigation.navigate('Questionnaires');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Status"
          value={formData.status}
          onChangeText={(value) => handleInputChange('status', value)}
          placeholder="Enter status"
        />

        <TextInput
          label="Last Name"
          value={formData.lastName}
          onChangeText={(value) => handleInputChange('lastName', value)}
          placeholder="Enter last name"
        />

        <TextInput
          label="First Name"
          value={formData.firstName}
          onChangeText={(value) => handleInputChange('firstName', value)}
          placeholder="Enter first name"
        />

        <Button
          title="Continue to Behavior Contracts"
          onPress={() => navigation.navigate('BehaviorContracts')}
        />

        <Button
          title="Continue to Questionnaires"
          onPress={() => navigation.navigate('Questionnaires')}
        />

        <Button
          title="View Progress Report"
          onPress={() => navigation.navigate('ProgressReport')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CreateProfile;
