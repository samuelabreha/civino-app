import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { updateUserProfile } from '../../redux/slices/authSlice';
import { firebaseService } from '../../services/firebase.service';

const ProfileSelectionScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'student',
      title: t('roles.student'),
      icon: 'school',
      description: t('roles.studentDescription'),
    },
    {
      id: 'teacher',
      title: t('roles.teacher'),
      icon: 'teach',
      description: t('roles.teacherDescription'),
    },
    {
      id: 'parent',
      title: t('roles.parent'),
      icon: 'account-child',
      description: t('roles.parentDescription'),
    },
    {
      id: 'admin',
      title: t('roles.admin'),
      icon: 'shield-account',
      description: t('roles.adminDescription'),
    },
  ];

  const handleRoleSelection = async (role) => {
    try {
      setSelectedRole(role);
      const userData = {
        role: role.id,
        updatedAt: new Date().toISOString(),
      };
      
      await firebaseService.updateUserProfile(userData);
      dispatch(updateUserProfile(userData));
      navigation.replace('Main');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('auth.selectProfile')}</Text>
        <Text style={styles.subtitle}>{t('auth.selectProfileDescription')}</Text>
      </View>

      <ScrollView style={styles.rolesContainer}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[
              styles.roleCard,
              selectedRole?.id === role.id && styles.selectedRole,
            ]}
            onPress={() => handleRoleSelection(role)}
          >
            <View style={styles.roleIconContainer}>
              <Icon name={role.icon} size={40} color="#2196F3" />
            </View>
            <View style={styles.roleContent}>
              <Text style={styles.roleTitle}>{role.title}</Text>
              <Text style={styles.roleDescription}>{role.description}</Text>
            </View>
            <Icon
              name={selectedRole?.id === role.id ? 'check-circle' : 'chevron-right'}
              size={24}
              color={selectedRole?.id === role.id ? '#4CAF50' : '#666'}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {t('auth.canChangeProfileLater')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  rolesContainer: {
    flex: 1,
    padding: 20,
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedRole: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  roleIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  roleContent: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  roleDescription: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProfileSelectionScreen;
