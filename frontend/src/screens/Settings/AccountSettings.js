import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';

const AccountSettings = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: 'utilisateur@example.com',
    firstName: 'Jean',
    lastName: 'Dupont',
    phone: '0123456789',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Ici, vous implémenteriez la logique pour sauvegarder les modifications
    Alert.alert(
      'Succès',
      'Vos modifications ont été enregistrées',
      [{ text: 'OK', onPress: () => setIsEditing(false) }]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Supprimer le compte',
      'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.',
      [
        { text: 'Annuler', style: 'cancel' },
        { 
          text: 'Supprimer', 
          style: 'destructive',
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.general.arrowBack} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Compte</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Image 
            source={isEditing ? icons.general.save : icons.general.edit} 
            style={styles.editIcon} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image source={icons.general.user} style={styles.avatar} />
          {isEditing && (
            <TouchableOpacity style={styles.changeAvatarButton}>
              <Image source={icons.general.camera} style={styles.cameraIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.formSection}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Prénom</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={userData.firstName}
            onChangeText={(text) => setUserData({...userData, firstName: text})}
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={userData.lastName}
            onChangeText={(text) => setUserData({...userData, lastName: text})}
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={userData.email}
            onChangeText={(text) => setUserData({...userData, email: text})}
            editable={isEditing}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Téléphone</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={userData.phone}
            onChangeText={(text) => setUserData({...userData, phone: text})}
            editable={isEditing}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {isEditing && (
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Enregistrer les modifications</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.deleteAccountButton}
        onPress={handleDeleteAccount}
      >
        <Image source={icons.general.trash} style={styles.deleteIcon} />
        <Text style={styles.deleteAccountText}>Supprimer le compte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#2196F3',
  },
  headerTitle: {
    ...typography.h6,
  },
  editButton: {
    padding: 8,
  },
  editIcon: {
    width: 24,
    height: 24,
    tintColor: '#2196F3',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  changeAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 20,
  },
  cameraIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  formSection: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    ...typography.caption,
    color: '#757575',
    marginBottom: 8,
  },
  input: {
    ...typography.body1,
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputDisabled: {
    backgroundColor: '#F5F5F5',
    color: '#757575',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    ...typography.button,
    color: '#FFF',
  },
  deleteAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F44336',
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#F44336',
    marginRight: 8,
  },
  deleteAccountText: {
    ...typography.button,
    color: '#F44336',
  },
});

export default AccountSettings;
