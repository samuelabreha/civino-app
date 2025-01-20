import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';

const AjouterContactScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    role: '',
    email: '',
    telephone: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const roles = [
    'Enseignant',
    'Moniteur FINC',
    'Parent',
    'Administrateur',
    'Animatrice Référente',
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.role) {
      newErrors.role = 'Le rôle est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Logique d'ajout du contact
      navigation.goBack();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Ajouter un contact" />
      <ScrollView style={styles.content}>
        <View style={styles.formSection}>
          <Text style={styles.label}>Nom*</Text>
          <TextInput
            style={[styles.input, errors.nom && styles.inputError]}
            value={formData.nom}
            onChangeText={(value) => handleInputChange('nom', value)}
            placeholder="Entrez le nom"
          />
          {errors.nom && <Text style={styles.errorText}>{errors.nom}</Text>}

          <Text style={styles.label}>Prénom*</Text>
          <TextInput
            style={[styles.input, errors.prenom && styles.inputError]}
            value={formData.prenom}
            onChangeText={(value) => handleInputChange('prenom', value)}
            placeholder="Entrez le prénom"
          />
          {errors.prenom && <Text style={styles.errorText}>{errors.prenom}</Text>}

          <Text style={styles.label}>Rôle*</Text>
          <Dropdown
            value={formData.role}
            options={roles}
            onChange={(value) => handleInputChange('role', value)}
            placeholder="Sélectionnez un rôle"
          />
          {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}

          <Text style={styles.label}>Email*</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            placeholder="Entrez l'email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Text style={styles.label}>Téléphone*</Text>
          <TextInput
            style={[styles.input, errors.telephone && styles.inputError]}
            value={formData.telephone}
            onChangeText={(value) => handleInputChange('telephone', value)}
            placeholder="Entrez le numéro de téléphone"
            keyboardType="phone-pad"
          />
          {errors.telephone && <Text style={styles.errorText}>{errors.telephone}</Text>}

          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.notes}
            onChangeText={(value) => handleInputChange('notes', value)}
            placeholder="Ajoutez des notes (optionnel)"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Ajouter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formSection: {
    marginBottom: 24,
  },
  label: {
    ...typography.caption,
    marginBottom: 8,
    color: colors.gray,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    ...typography.body,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: -12,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.lightGray,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
  cancelButtonText: {
    ...typography.body,
    color: colors.gray,
  },
  submitButtonText: {
    ...typography.body,
    color: colors.white,
  },
});

export default AjouterContactScreen;
