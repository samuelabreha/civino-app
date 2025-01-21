import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';

const EditAccountScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    phone: '+41 76 123 45 67',
    role: 'Enseignant',
    institution: 'École Primaire de Genève',
    profileImage: null
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleImagePicker = () => {
    const options = {
      title: 'Sélectionner une photo de profil',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('L'utilisateur a annulé la sélection d'image');
      } else if (response.error) {
        console.log('Erreur :', response.error);
      } else {
        setFormData(prev => ({
          ...prev,
          profileImage: response.uri
        }));
      }
    });
  };

  const handleSave = () => {
    // Validation des données
    if (!formData.firstName || !formData.lastName || !formData.email) {
      Alert.alert(
        'Erreur de Validation',
        'Veuillez remplir tous les champs obligatoires'
      );
      return;
    }

    // Logique pour sauvegarder les modifications
    setIsEditing(false);
    Alert.alert(
      'Succès',
      'Vos modifications ont été enregistrées avec succès'
    );
  };

  const renderField = (label, value, key, isRequired = true) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>
        {label} {isRequired && <Text style={styles.requiredStar}>*</Text>}
      </Text>
      <TextInput
        style={[
          styles.input,
          !isEditing && styles.inputDisabled
        ]}
        value={value}
        onChangeText={(text) => setFormData(prev => ({ ...prev, [key]: text }))}
        editable={isEditing}
        placeholder={`Entrer ${label.toLowerCase()}`}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={40} color="#2196F3" />
        <Text style={styles.title}>Modifier le Profil</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <TouchableOpacity 
          style={styles.imageWrapper}
          onPress={isEditing ? handleImagePicker : null}
        >
          {formData.profileImage ? (
            <Image
              source={{ uri: formData.profileImage }}
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Icon name="person" size={60} color="#BDBDBD" />
            </View>
          )}
          {isEditing && (
            <View style={styles.editImageOverlay}>
              <Icon name="camera-alt" size={24} color="#FFFFFF" />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        {renderField('Prénom', formData.firstName, 'firstName')}
        {renderField('Nom', formData.lastName, 'lastName')}
        {renderField('Email', formData.email, 'email')}
        {renderField('Téléphone', formData.phone, 'phone', false)}
        {renderField('Rôle', formData.role, 'role')}
        {renderField('Institution', formData.institution, 'institution')}
      </View>

      <View style={styles.actionsContainer}>
        {!isEditing ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Icon name="edit" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Modifier le Profil</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSave}
            >
              <Icon name="check" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsEditing(false)}
            >
              <Icon name="close" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.securitySection}>
        <Text style={styles.sectionTitle}>Sécurité</Text>
        <TouchableOpacity style={styles.securityButton}>
          <Icon name="lock" size={24} color="#2196F3" />
          <Text style={styles.securityButtonText}>Changer le Mot de Passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.securityButton}>
          <Icon name="security" size={24} color="#2196F3" />
          <Text style={styles.securityButtonText}>Activer l'Authentification à Deux Facteurs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dangerZone}>
        <Text style={styles.dangerTitle}>Zone Dangereuse</Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => {
            Alert.alert(
              'Supprimer le Compte',
              'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.',
              [
                {
                  text: 'Annuler',
                  style: 'cancel',
                },
                {
                  text: 'Supprimer',
                  style: 'destructive',
                  onPress: () => {
                    // Logique de suppression du compte
                  },
                },
              ]
            );
          }}
        >
          <Icon name="delete-forever" size={24} color="#F44336" />
          <Text style={styles.deleteButtonText}>Supprimer le Compte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    padding: 20,
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  editImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  requiredStar: {
    color: '#F44336',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  inputDisabled: {
    backgroundColor: '#F5F5F5',
    color: '#757575',
  },
  actionsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#757575',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  securitySection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  securityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  securityButtonText: {
    color: '#2196F3',
    fontSize: 16,
    marginLeft: 10,
  },
  dangerZone: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  dangerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: 15,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  deleteButtonText: {
    color: '#F44336',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default EditAccountScreen;
