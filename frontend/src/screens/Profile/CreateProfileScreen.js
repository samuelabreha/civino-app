import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button, TextInput } from '../../components/common';

const CreateProfileScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    class: '',
  });

  const roles = [
    { label: 'Enfant', value: 'enfant' },
    { label: 'Enseignant', value: 'enseignant' },
    { label: 'Parent', value: 'parent' },
    { label: 'Moniteur FINC', value: 'moniteurFinc' },
    { label: 'Animatrice Référente', value: 'animatriceReferente' },
  ];

  const handleSubmit = () => {
    // TODO: Implement profile creation logic
    navigation.navigate('SelectProfile');
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.formCard}>
        <Typography variant="h2" style={styles.title}>
          Créer un profil
        </Typography>

        <View style={styles.formGroup}>
          <Typography variant="subtitle1">Prénom</Typography>
          <TextInput
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            placeholder="Entrez votre prénom"
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Typography variant="subtitle1">Nom</Typography>
          <TextInput
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            placeholder="Entrez votre nom"
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Typography variant="subtitle1">Rôle</Typography>
          <View style={styles.roleButtons}>
            {roles.map((role) => (
              <Button
                key={role.value}
                variant={formData.role === role.value ? 'primary' : 'outline'}
                onPress={() => setFormData({ ...formData, role: role.value })}
                style={styles.roleButton}
              >
                {role.label}
              </Button>
            ))}
          </View>
        </View>

        {formData.role === 'enfant' && (
          <View style={styles.formGroup}>
            <Typography variant="subtitle1">Classe</Typography>
            <TextInput
              value={formData.class}
              onChangeText={(text) => setFormData({ ...formData, class: text })}
              placeholder="Entrez votre classe"
              style={styles.input}
            />
          </View>
        )}

        <Button
          variant="primary"
          onPress={handleSubmit}
          style={styles.submitButton}
          disabled={!formData.firstName || !formData.lastName || !formData.role}
        >
          Créer le profil
        </Button>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  formCard: {
    padding: theme.spacing.lg,
  },
  title: {
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: theme.spacing.lg,
  },
  input: {
    marginTop: theme.spacing.sm,
  },
  roleButtons: {
    flexDirection: 'column',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  roleButton: {
    width: '100%',
  },
  submitButton: {
    marginTop: theme.spacing.xl,
  },
});

export default CreateProfileScreen;
