import auth from '@react-native-firebase/auth';
import { store } from '../redux/store';
import { setUser, setLoading, setError } from '../redux/slices/authSlice';

class AuthService {
  async signIn(email, password) {
    try {
      store.dispatch(setLoading(true));
      const response = await auth().signInWithEmailAndPassword(email, password);
      store.dispatch(setUser(response.user));
      return response.user;
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async signUp(email, password, userData) {
    try {
      store.dispatch(setLoading(true));
      const response = await auth().createUserWithEmailAndPassword(email, password);
      
      // Mettre à jour le profil utilisateur
      await response.user.updateProfile({
        displayName: userData.name,
      });

      store.dispatch(setUser(response.user));
      return response.user;
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async signOut() {
    try {
      store.dispatch(setLoading(true));
      await auth().signOut();
      store.dispatch(setUser(null));
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async resetPassword(email) {
    try {
      store.dispatch(setLoading(true));
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  async updateProfile(userData) {
    try {
      store.dispatch(setLoading(true));
      const currentUser = auth().currentUser;
      if (currentUser) {
        await currentUser.updateProfile({
          displayName: userData.name,
          photoURL: userData.photoURL,
        });
        store.dispatch(setUser(currentUser));
      }
    } catch (error) {
      store.dispatch(setError(error.message));
      throw error;
    } finally {
      store.dispatch(setLoading(false));
    }
  }

  getCurrentUser() {
    return auth().currentUser;
  }

  onAuthStateChanged(callback) {
    return auth().onAuthStateChanged(callback);
  }
}

export default new AuthService();
