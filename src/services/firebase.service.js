import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const messaging = getMessaging(app);

class FirebaseService {
  // Auth Methods
  async signIn(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData = await this.getUserProfile(userCredential.user.uid);
    return { ...userCredential.user, ...userData };
  }

  async signUp(userData) {
    const { email, password, ...profile } = userData;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await this.createUserProfile(userCredential.user.uid, profile);
    return { ...userCredential.user, ...profile };
  }

  async signOutUser() {
    await signOut(auth);
  }

  // User Profile Methods
  async getUserProfile(userId) {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  async createUserProfile(userId, profile) {
    await setDoc(doc(db, 'users', userId), {
      ...profile,
      createdAt: new Date().toISOString(),
    });
  }

  async updateUserProfile(userId, profile) {
    await updateDoc(doc(db, 'users', userId), {
      ...profile,
      updatedAt: new Date().toISOString(),
    });
  }

  // Questionnaire Methods
  async getQuestionnaires({ userId, context, limit: queryLimit }) {
    let q = query(collection(db, 'questionnaires'));
    
    if (userId) {
      q = query(q, where('userId', '==', userId));
    }
    if (context) {
      q = query(q, where('context', '==', context));
    }
    if (queryLimit) {
      q = query(q, limit(queryLimit));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getQuestionnaireById(id) {
    const docRef = doc(db, 'questionnaires', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  async submitQuestionnaireAnswers(data) {
    await addDoc(collection(db, 'answers'), {
      ...data,
      createdAt: new Date().toISOString(),
    });
  }

  // Contract Methods
  async getContracts({ userId, status }) {
    let q = query(collection(db, 'contracts'));
    
    if (userId) {
      q = query(q, where('participants', 'array-contains', userId));
    }
    if (status) {
      q = query(q, where('status', '==', status));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async createContract(data) {
    return await addDoc(collection(db, 'contracts'), data);
  }

  async updateContract(id, data) {
    await updateDoc(doc(db, 'contracts', id), data);
  }

  // Calendar Methods
  async getEvents({ userId, startDate, endDate }) {
    let q = query(collection(db, 'events'));
    
    if (userId) {
      q = query(q, where('userId', '==', userId));
    }
    if (startDate) {
      q = query(q, where('date', '>=', startDate));
    }
    if (endDate) {
      q = query(q, where('date', '<=', endDate));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async createEvent(data) {
    return await addDoc(collection(db, 'events'), data);
  }

  async updateEvent(id, data) {
    await updateDoc(doc(db, 'events', id), data);
  }

  async deleteEvent(id) {
    await deleteDoc(doc(db, 'events', id));
  }

  // Document Methods
  async getDocuments({ userId, type }) {
    let q = query(collection(db, 'documents'));
    
    if (userId) {
      q = query(q, where('userId', '==', userId));
    }
    if (type) {
      q = query(q, where('type', '==', type));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async uploadDocument(file, metadata) {
    const storageRef = ref(storage, `documents/${metadata.userId}/${Date.now()}_${metadata.name}`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    
    const docRef = await addDoc(collection(db, 'documents'), {
      ...metadata,
      url: downloadUrl,
      createdAt: new Date().toISOString(),
    });

    return docRef.id;
  }

  async deleteDocument(id) {
    const docRef = doc(db, 'documents', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const { url } = docSnap.data();
      const storageRef = ref(storage, url);
      await deleteObject(storageRef);
      await deleteDoc(docRef);
    }
  }

  // Notification Methods
  async getNotificationToken() {
    try {
      const currentToken = await getToken(messaging);
      if (currentToken) {
        return currentToken;
      }
      console.log('No registration token available.');
      return null;
    } catch (error) {
      console.error('An error occurred while retrieving token:', error);
      return null;
    }
  }

  async sendNotification(data) {
    await addDoc(collection(db, 'notifications'), {
      ...data,
      createdAt: new Date().toISOString(),
      read: false,
    });
  }

  async getNotifications(userId) {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async markNotificationAsRead(id) {
    await updateDoc(doc(db, 'notifications', id), {
      read: true,
      readAt: new Date().toISOString(),
    });
  }

  // Statistics Methods
  async getUserStatistics(userId) {
    const stats = {
      questionnaires: {
        total: 0,
        completed: 0,
        avgScore: 0,
      },
      contracts: {
        total: 0,
        signed: 0,
        pending: 0,
      },
      documents: {
        total: 0,
        byType: {},
      },
    };

    // Get questionnaire stats
    const questionnairesQuery = query(
      collection(db, 'answers'),
      where('userId', '==', userId)
    );
    const questionnairesSnapshot = await getDocs(questionnairesQuery);
    stats.questionnaires.total = questionnairesSnapshot.size;
    let totalScore = 0;
    questionnairesSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.status === 'completed') {
        stats.questionnaires.completed++;
        totalScore += data.score || 0;
      }
    });
    stats.questionnaires.avgScore = totalScore / stats.questionnaires.completed || 0;

    // Get contract stats
    const contractsQuery = query(
      collection(db, 'contracts'),
      where('participants', 'array-contains', userId)
    );
    const contractsSnapshot = await getDocs(contractsQuery);
    stats.contracts.total = contractsSnapshot.size;
    contractsSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.status === 'signed') {
        stats.contracts.signed++;
      } else if (data.status === 'pending') {
        stats.contracts.pending++;
      }
    });

    // Get document stats
    const documentsQuery = query(
      collection(db, 'documents'),
      where('userId', '==', userId)
    );
    const documentsSnapshot = await getDocs(documentsQuery);
    stats.documents.total = documentsSnapshot.size;
    documentsSnapshot.forEach(doc => {
      const data = doc.data();
      stats.documents.byType[data.type] = (stats.documents.byType[data.type] || 0) + 1;
    });

    return stats;
  }
}

export const firebaseService = new FirebaseService();
