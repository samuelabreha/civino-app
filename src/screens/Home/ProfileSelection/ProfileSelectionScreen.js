import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileSelectionScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 'child',
      title: t('profiles.child'),
      icon: 'account-child',
      description: t('profiles.childDescription'),
      color: '#4CAF50',
    },
    {
      id: 'teacher',
      title: t('profiles.teacher'),
      icon: 'teach',
      description: t('profiles.teacherDescription'),
      color: '#2196F3',
    },
    {
      id: 'monitor',
      title: t('profiles.monitor'),
      icon: 'account-tie',
      description: t('profiles.monitorDescription'),
      color: '#FF9800',
    },
    {
      id: 'parent',
      title: t('profiles.parent'),
      icon: 'account-child-circle',
      description: t('profiles.parentDescription'),
      color: '#9C27B0',
    },
    {
      id: 'admin',
      title: t('profiles.admin'),
      icon: 'shield-account',
      description: t('profiles.adminDescription'),
      color: '#F44336',
    },
  ];

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
    // Navigation vers la section appropriée selon le profil
    switch (profileId) {
      case 'child':
        navigation.navigate('ChildHome');
        break;
      case 'teacher':
        navigation.navigate('TeacherHome');
        break;
      case 'monitor':
        navigation.navigate('MonitorHome');
        break;
      case 'parent':
        navigation.navigate('ParentHome');
        break;
      case 'admin':
        navigation.navigate('AdminHome');
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('profiles.selectTitle')}</Text>
        <Text style={styles.subtitle}>{t('profiles.selectDescription')}</Text>
      </View>

      <View style={styles.profilesContainer}>
        {profiles.map((profile) => (
          <TouchableOpacity
            key={profile.id}
            style={[
              styles.profileCard,
              selectedProfile === profile.id && styles.selectedCard,
            ]}
            onPress={() => handleProfileSelect(profile.id)}
          >
            <View style={[styles.iconContainer, { backgroundColor: profile.color }]}>
              <Icon name={profile.icon} size={32} color="#FFFFFF" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileTitle}>{profile.title}</Text>
              <Text style={styles.profileDescription}>{profile.description}</Text>
            </View>
            <Icon
              name="chevron-right"
              size={24}
              color={selectedProfile === profile.id ? profile.color : '#666'}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.noteContainer}>
        <Icon name="information" size={24} color="#666" />
        <Text style={styles.noteText}>
          {t('profiles.note')}
        </Text>
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
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  profilesContainer: {
    padding: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedCard: {
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#666',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    marginBottom: 40,
  },
  noteText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ProfileSelectionScreen;
