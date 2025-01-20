import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const UserProfile = ({
  user,
  onEditProfile,
  onChangePassword,
  onLogout,
}) => {
  const { t } = useTranslation();

  const getRoleIcon = () => {
    switch (user.role) {
      case 'teacher':
        return 'teach';
      case 'student':
        return 'school';
      case 'parent':
        return 'account-child';
      case 'admin':
        return 'shield-account';
      default:
        return 'account';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          {user.photoURL ? (
            <Image
              source={{ uri: user.photoURL }}
              style={styles.avatar}
            />
          ) : (
            <Icon name="account" size={60} color="#FFFFFF" />
          )}
          <TouchableOpacity
            style={styles.editAvatarButton}
            onPress={() => onEditProfile('photo')}
          >
            <Icon name="camera" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.displayName}</Text>
          <View style={styles.roleContainer}>
            <Icon name={getRoleIcon()} size={16} color="#2196F3" />
            <Text style={styles.role}>
              {t(`roles.${user.role}`)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => onEditProfile('info')}
        >
          <Icon name="account-edit" size={24} color="#666" />
          <Text style={styles.menuText}>{t('profile.editProfile')}</Text>
          <Icon name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={onChangePassword}
        >
          <Icon name="lock-reset" size={24} color="#666" />
          <Text style={styles.menuText}>{t('profile.changePassword')}</Text>
          <Icon name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, styles.logoutButton]}
          onPress={onLogout}
        >
          <Icon name="logout" size={24} color="#EF5350" />
          <Text style={[styles.menuText, styles.logoutText]}>
            {t('profile.logout')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E3F2FD',
  },
  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  role: {
    marginLeft: 5,
    fontSize: 16,
    color: '#2196F3',
  },
  content: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    marginTop: 20,
  },
  logoutText: {
    color: '#EF5350',
  },
});

export default UserProfile;
