import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../../contexts/AuthContext';

const roles = [
  {
    id: 'enfant',
    title: 'Enfant',
    icon: 'account-child',
    color: '#4CAF50',
    description: 'Accédez aux questionnaires et suivez vos progrès',
  },
  {
    id: 'enseignant',
    title: 'Enseignant',
    icon: 'school',
    color: '#2196F3',
    description: 'Gérez les évaluations et suivez les progrès des élèves',
  },
  {
    id: 'parent',
    title: 'Parent',
    icon: 'account-child-circle',
    color: '#FF9800',
    description: 'Suivez les progrès de vos enfants',
  },
  {
    id: 'moniteur_finc',
    title: 'Moniteur FINC',
    icon: 'account-group',
    color: '#9C27B0',
    description: 'Gérez les groupes et les activités',
  },
  {
    id: 'animatrice_referente',
    title: 'Animatrice Référente',
    icon: 'account-star',
    color: '#E91E63',
    description: 'Supervisez les activités et générez des rapports',
  },
];

const SelectRoleScreen = ({ navigation, route }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateProfile } = useAuth();
  const { userData } = route.params;

  const handleRoleSelection = async () => {
    if (!selectedRole) {
      Alert.alert('Erreur', 'Veuillez sélectionner un rôle');
      return;
    }

    try {
      setLoading(true);
      await updateProfile({
        ...userData,
        role: selectedRole,
      });
    } catch (error) {
      Alert.alert(
        'Erreur',
        error.message || 'Une erreur est survenue lors de la mise à jour du profil'
      );
    } finally {
      setLoading(false);
    }
  };

  const RoleCard = ({ role }) => (
    <TouchableOpacity
      style={[
        styles.roleCard,
        selectedRole === role.id && styles.selectedRoleCard,
        { borderColor: role.color },
      ]}
      onPress={() => setSelectedRole(role.id)}
    >
      <View style={[styles.iconContainer, { backgroundColor: role.color }]}>
        <Icon name={role.icon} size={30} color="#fff" />
      </View>
      <View style={styles.roleInfo}>
        <Text style={styles.roleTitle}>{role.title}</Text>
        <Text style={styles.roleDescription}>{role.description}</Text>
      </View>
      {selectedRole === role.id && (
        <View style={[styles.checkmark, { backgroundColor: role.color }]}>
          <Icon name="check" size={20} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez votre rôle</Text>
      <Text style={styles.subtitle}>
        Choisissez le rôle qui correspond le mieux à votre utilisation de l'application
      </Text>

      <ScrollView style={styles.rolesContainer}>
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.continueButton, loading && styles.continueButtonDisabled]}
          onPress={handleRoleSelection}
          disabled={loading || !selectedRole}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.continueButtonText}>Continuer</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  rolesContainer: {
    flex: 1,
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedRoleCard: {
    borderWidth: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  roleDescription: {
    fontSize: 14,
    color: '#666',
  },
  checkmark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  continueButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectRoleScreen;
