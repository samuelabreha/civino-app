import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';

const GestionCompteScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: 'utilisateur@example.com',
    nom: 'Dupont',
    prenom: 'Jean',
    telephone: '0123456789',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...userData });
  };

  const handleSave = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
    // Implémenter la logique de sauvegarde
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...userData });
  };

  const handleDeconnexion = () => {
    navigation.navigate('Parametres/DeconnexionScreen');
  };

  const handleChangePassword = () => {
    navigation.navigate('Authentification/ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Header title="Gestion du compte" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          
          {isEditing ? (
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={editedData.email}
                onChangeText={(text) => setEditedData({ ...editedData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={styles.input}
                value={editedData.nom}
                onChangeText={(text) => setEditedData({ ...editedData, nom: text })}
              />

              <Text style={styles.label}>Prénom</Text>
              <TextInput
                style={styles.input}
                value={editedData.prenom}
                onChangeText={(text) => setEditedData({ ...editedData, prenom: text })}
              />

              <Text style={styles.label}>Téléphone</Text>
              <TextInput
                style={styles.input}
                value={editedData.telephone}
                onChangeText={(text) => setEditedData({ ...editedData, telephone: text })}
                keyboardType="phone-pad"
              />

              <View style={styles.editButtons}>
                <TouchableOpacity 
                  style={[styles.button, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.cancelButtonText}>Annuler</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.saveButton]}
                  onPress={handleSave}
                >
                  <Text style={styles.saveButtonText}>Enregistrer</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{userData.email}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Nom</Text>
                <Text style={styles.infoValue}>{userData.nom}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Prénom</Text>
                <Text style={styles.infoValue}>{userData.prenom}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Téléphone</Text>
                <Text style={styles.infoValue}>{userData.telephone}</Text>
              </View>

              <TouchableOpacity 
                style={[styles.button, styles.editButton]}
                onPress={handleEdit}
              >
                <Text style={styles.editButtonText}>Modifier</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sécurité</Text>
          
          <TouchableOpacity 
            style={[styles.button, styles.securityButton]}
            onPress={handleChangePassword}
          >
            <Text style={styles.buttonText}>Changer le mot de passe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Session</Text>
          
          <TouchableOpacity 
            style={[styles.button, styles.logoutButton]}
            onPress={handleDeconnexion}
          >
            <Text style={styles.buttonText}>Se déconnecter</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: 16,
    color: colors.primary,
  },
  infoContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  infoLabel: {
    ...typography.body,
    color: colors.gray,
  },
  infoValue: {
    ...typography.body,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  label: {
    ...typography.caption,
    color: colors.gray,
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    ...typography.body,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  editButton: {
    backgroundColor: colors.primary,
  },
  saveButton: {
    flex: 1,
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.lightGray,
    marginRight: 8,
  },
  securityButton: {
    backgroundColor: colors.secondary,
  },
  logoutButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
  },
  editButtonText: {
    ...typography.body,
    color: colors.white,
  },
  saveButtonText: {
    ...typography.body,
    color: colors.white,
  },
  cancelButtonText: {
    ...typography.body,
    color: colors.gray,
  },
});

export default GestionCompteScreen;
