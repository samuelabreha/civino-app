import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentProfile,
  setProfiles,
  addProfile,
  updateProfile,
  deleteProfile,
  setLoading,
  setError,
} from '../store/slices/profileSlice';
import { storage } from '../services/storage';

export const useProfiles = () => {
  const dispatch = useDispatch();
  const {
    currentProfile,
    profiles,
    isLoading,
    error,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    try {
      dispatch(setLoading(true));
      const storedProfiles = await storage.getProfiles();
      dispatch(setProfiles(storedProfiles));

      const storedCurrentProfile = await storage.getCurrentProfile();
      if (storedCurrentProfile) {
        dispatch(setCurrentProfile(storedCurrentProfile));
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const createProfile = async (profileData) => {
    try {
      dispatch(setLoading(true));
      const newProfile = {
        ...profileData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };

      const updatedProfiles = [...profiles, newProfile];
      await storage.saveProfiles(updatedProfiles);
      dispatch(addProfile(newProfile));

      return newProfile;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const selectProfile = async (profile) => {
    try {
      dispatch(setLoading(true));
      await storage.saveCurrentProfile(profile);
      dispatch(setCurrentProfile(profile));
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const updateProfileData = async (profileId, updates) => {
    try {
      dispatch(setLoading(true));
      const profileToUpdate = profiles.find((p) => p.id === profileId);
      if (!profileToUpdate) throw new Error('Profile not found');

      const updatedProfile = {
        ...profileToUpdate,
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      const updatedProfiles = profiles.map((p) =>
        p.id === profileId ? updatedProfile : p
      );

      await storage.saveProfiles(updatedProfiles);
      dispatch(updateProfile(updatedProfile));

      if (currentProfile?.id === profileId) {
        await storage.saveCurrentProfile(updatedProfile);
        dispatch(setCurrentProfile(updatedProfile));
      }

      return updatedProfile;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const removeProfile = async (profileId) => {
    try {
      dispatch(setLoading(true));
      const updatedProfiles = profiles.filter((p) => p.id !== profileId);
      await storage.saveProfiles(updatedProfiles);
      dispatch(deleteProfile(profileId));

      if (currentProfile?.id === profileId) {
        await storage.saveCurrentProfile(null);
        dispatch(setCurrentProfile(null));
      }
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const logout = async () => {
    try {
      dispatch(setLoading(true));
      await storage.saveCurrentProfile(null);
      dispatch(setCurrentProfile(null));
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    currentProfile,
    profiles,
    isLoading,
    error,
    createProfile,
    selectProfile,
    updateProfileData,
    removeProfile,
    logout,
  };
};
