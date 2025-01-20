import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles/globalStyles';
import Header from '../../components/Header';

const SupprimerContactScreen = ({ navigation, route }) => {
  const { contactId } = route.params;

  const handleConfirmDelete = () => {
    // Logique de suppression du contact
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Supprimer le contact" />
      <View style={styles.content}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Confirmer la suppression</Text>
          <Text style={styles.message}>
            Êtes-vous sûr de vouloir supprimer ce contact ? Cette action est irréversible.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.deleteButton]}
            onPress={handleConfirmDelete}
          >
            <Text style={styles.deleteButtonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'center',
  },
  messageBox: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.error,
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    ...typography.body,
    textAlign: 'center',
    color: colors.gray,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  deleteButton: {
    backgroundColor: colors.error,
    marginLeft: 8,
  },
  cancelButtonText: {
    ...typography.body,
    color: colors.gray,
  },
  deleteButtonText: {
    ...typography.body,
    color: colors.white,
  },
});

export default SupprimerContactScreen;
