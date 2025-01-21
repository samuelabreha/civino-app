import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import { firebaseService } from '../../services/firebase.service';
import { updateUser, logout } from '../../store/slices/authSlice';

const SettingItem = ({ icon, title, value, onPress, type = 'button' }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.settingIcon}>
      <Icon name={icon} size={24} color="#2196F3" />
    </View>
    <View style={styles.settingContent}>
      <Text style={styles.settingTitle}>{title}</Text>
      {type === 'toggle' ? (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{ false: '#E0E0E0', true: '#90CAF9' }}
          thumbColor={value ? '#2196F3' : '#F5F5F5'}
        />
      ) : (
        <View style={styles.settingValue}>
          <Text style={styles.settingValueText}>{value}</Text>
          <Icon name="chevron-right" size={20} color="#666" />
        </View>
      )}
    </View>
  </TouchableOpacity>
);

const ProfileScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    avatar: user?.avatar || null,
    notifications: user?.notifications !== false,
    language: user?.language || 'fr',
  });

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        t('common.error'),
        t('profile.errorPermissions'),
        [{ text: t('common.ok') }]
      );
    }
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled) {
        setProfile(prev => ({ ...prev, avatar: result.assets[0].uri }));
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert(
        t('common.error'),
        t('profile.errorImage'),
        [{ text: t('common.ok') }]
      );
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // Validate required fields
      if (!profile.firstName.trim() || !profile.lastName.trim()) {
        Alert.alert(t('common.error'), t('profile.errorRequiredFields'));
        return;
      }

      let avatarUrl = profile.avatar;
      if (profile.avatar && profile.avatar !== user.avatar) {
        avatarUrl = await firebaseService.uploadAvatar(profile.avatar, user.uid);
      }

      const updatedProfile = {
        ...profile,
        avatar: avatarUrl,
        updatedAt: new Date().toISOString(),
      };

      await firebaseService.updateUserProfile(user.uid, updatedProfile);
      dispatch(updateUser(updatedProfile));
      
      setEditing(false);
      Alert.alert(
        t('common.success'),
        t('profile.saveSuccess'),
        [{ text: t('common.ok') }]
      );
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert(t('common.error'), t('profile.saveError'));
    } finally {
      setLoading(false);
    }
  };

  const handleChangeLanguage = async () => {
    const newLanguage = profile.language === 'fr' ? 'en' : 'fr';
    setProfile(prev => ({ ...prev, language: newLanguage }));
    await i18n.changeLanguage(newLanguage);
    await firebaseService.updateUserProfile(user.uid, { language: newLanguage });
  };

  const handleToggleNotifications = async (value) => {
    setProfile(prev => ({ ...prev, notifications: value }));
    await firebaseService.updateUserProfile(user.uid, { notifications: value });
  };

  const handleLogout = async () => {
    Alert.alert(
      t('common.confirm'),
      t('profile.logoutConfirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.logout'),
          style: 'destructive',
          onPress: async () => {
            try {
              await firebaseService.signOut();
              dispatch(logout());
            } catch (error) {
              console.error('Error logging out:', error);
              Alert.alert(t('common.error'), t('profile.logoutError'));
            }
          },
        },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      t('common.warning'),
      t('profile.deleteAccountWarning'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('common.delete'),
          style: 'destructive',
          onPress: async () => {
            try {
              await firebaseService.deleteAccount(user.uid);
              dispatch(logout());
            } catch (error) {
              console.error('Error deleting account:', error);
              Alert.alert(t('common.error'), t('profile.deleteAccountError'));
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={editing ? handlePickImage : undefined}
        >
          {profile.avatar ? (
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Icon name="account" size={40} color="#FFFFFF" />
            </View>
          )}
          {editing && (
            <View style={styles.editAvatarButton}>
              <Icon name="camera" size={20} color="#FFFFFF" />
            </View>
          )}
        </TouchableOpacity>

        {editing ? (
          <View style={styles.editForm}>
            <TextInput
              style={styles.input}
              value={profile.firstName}
              onChangeText={text => setProfile(prev => ({ ...prev, firstName: text }))}
              placeholder={t('profile.firstName')}
            />
            <TextInput
              style={styles.input}
              value={profile.lastName}
              onChangeText={text => setProfile(prev => ({ ...prev, lastName: text }))}
              placeholder={t('profile.lastName')}
            />
            <TextInput
              style={styles.input}
              value={profile.phone}
              onChangeText={text => setProfile(prev => ({ ...prev, phone: text }))}
              placeholder={t('profile.phone')}
              keyboardType="phone-pad"
            />
          </View>
        ) : (
          <View style={styles.profileInfo}>
            <Text style={styles.name}>
              {profile.firstName} {profile.lastName}
            </Text>
            <Text style={styles.email}>{profile.email}</Text>
            {profile.phone && (
              <Text style={styles.phone}>{profile.phone}</Text>
            )}
          </View>
        )}

        <TouchableOpacity
          style={[styles.editButton, editing && styles.saveButton]}
          onPress={editing ? handleSave : () => setEditing(true)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Icon
                name={editing ? 'content-save' : 'pencil'}
                size={20}
                color="#FFFFFF"
              />
              <Text style={styles.editButtonText}>
                {t(editing ? 'common.save' : 'common.edit')}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.settings}>
        <Text style={styles.sectionTitle}>{t('profile.settings')}</Text>

        <SettingItem
          icon="translate"
          title={t('profile.language')}
          value={profile.language === 'fr' ? 'Français' : 'English'}
          onPress={handleChangeLanguage}
        />

        <SettingItem
          icon="bell"
          title={t('profile.notifications')}
          value={profile.notifications}
          onPress={handleToggleNotifications}
          type="toggle"
        />

        <SettingItem
          icon="shield-lock"
          title={t('profile.security')}
          value={t('profile.changePassword')}
          onPress={() => navigation.navigate('Security')}
        />

        <SettingItem
          icon="help-circle"
          title={t('profile.help')}
          value={t('profile.support')}
          onPress={() => navigation.navigate('Support')}
        />

        <TouchableOpacity
          style={[styles.settingItem, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Icon name="logout" size={24} color="#F44336" />
          <Text style={styles.logoutText}>{t('profile.logout')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.settingItem, styles.deleteButton]}
          onPress={handleDeleteAccount}
        >
          <Icon name="delete" size={24} color="#F44336" />
          <Text style={styles.deleteText}>
            {t('profile.deleteAccount')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
  editForm: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  settings: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  settingIcon: {
    width: 40,
  },
  settingContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  logoutButton: {
    marginTop: 20,
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    marginLeft: 10,
  },
  deleteButton: {
    justifyContent: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: '#F44336',
    marginLeft: 10,
  },
});

export default ProfileScreen;
