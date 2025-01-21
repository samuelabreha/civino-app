import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  PROFILES: '@app_profiles',
  CURRENT_PROFILE: '@app_current_profile',
  EVALUATIONS: '@app_evaluations',
  SETTINGS: '@app_settings',
};

export const storage = {
  // Profile Management
  async saveProfiles(profiles) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.PROFILES, JSON.stringify(profiles));
    } catch (error) {
      console.error('Error saving profiles:', error);
      throw error;
    }
  },

  async getProfiles() {
    try {
      const profiles = await AsyncStorage.getItem(STORAGE_KEYS.PROFILES);
      return profiles ? JSON.parse(profiles) : [];
    } catch (error) {
      console.error('Error getting profiles:', error);
      return [];
    }
  },

  async saveCurrentProfile(profile) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.CURRENT_PROFILE,
        JSON.stringify(profile)
      );
    } catch (error) {
      console.error('Error saving current profile:', error);
      throw error;
    }
  },

  async getCurrentProfile() {
    try {
      const profile = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_PROFILE);
      return profile ? JSON.parse(profile) : null;
    } catch (error) {
      console.error('Error getting current profile:', error);
      return null;
    }
  },

  // Evaluation Management
  async saveEvaluations(profileId, evaluations) {
    try {
      const key = `${STORAGE_KEYS.EVALUATIONS}_${profileId}`;
      await AsyncStorage.setItem(key, JSON.stringify(evaluations));
    } catch (error) {
      console.error('Error saving evaluations:', error);
      throw error;
    }
  },

  async getEvaluations(profileId) {
    try {
      const key = `${STORAGE_KEYS.EVALUATIONS}_${profileId}`;
      const evaluations = await AsyncStorage.getItem(key);
      return evaluations ? JSON.parse(evaluations) : [];
    } catch (error) {
      console.error('Error getting evaluations:', error);
      return [];
    }
  },

  // Settings Management
  async saveSettings(settings) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
      throw error;
    }
  },

  async getSettings() {
    try {
      const settings = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settings ? JSON.parse(settings) : {};
    } catch (error) {
      console.error('Error getting settings:', error);
      return {};
    }
  },

  // Utility Functions
  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  },

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item:', error);
      throw error;
    }
  },
};
