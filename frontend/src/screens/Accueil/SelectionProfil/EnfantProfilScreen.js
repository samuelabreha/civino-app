import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { icons } from '../../../constants/assets';
import { typography } from '../../../styles/theme';

const EnfantProfilScreen = ({ navigation }) => {
  const childProfiles = [
    { id: 1, name: 'Lucas Martin', age: 8, status: 'actif' },
    { id: 2, name: 'Emma Dubois', age: 10, status: 'inactif' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.general.children} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Profils Enfants</Text>
      </View>

      <ScrollView style={styles.profileList}>
        {childProfiles.map(profile => (
          <TouchableOpacity
            key={profile.id}
            style={styles.profileCard}
            onPress={() => navigation.navigate('ChildDetails', { profile })}
          >
            <Image source={icons.general.user} style={styles.avatar} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileAge}>{profile.age} ans</Text>
            </View>
            <View style={[
              styles.statusBadge,
              profile.status === 'actif' ? styles.statusActive : styles.statusInactive
            ]}>
              <Text style={styles.statusText}>
                {profile.status === 'actif' ? 'Actif' : 'Inactif'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreationProfil')}
      >
        <Image source={icons.general.add} style={styles.addIcon} />
        <Text style={styles.addButtonText}>Ajouter un profil</Text>
      </TouchableOpacity>
    </View>
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
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: '#2196F3',
  },
  headerTitle: {
    ...typography.h6,
  },
  profileList: {
    padding: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...typography.subtitle1,
    marginBottom: 4,
  },
  profileAge: {
    ...typography.body2,
    color: '#757575',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusActive: {
    backgroundColor: '#E8F5E9',
  },
  statusInactive: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    ...typography.caption,
    color: '#2E7D32',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 16,
    borderRadius: 8,
  },
  addIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
    marginRight: 8,
  },
  addButtonText: {
    ...typography.button,
    color: '#FFF',
  },
});

export default EnfantProfilScreen;
