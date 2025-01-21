import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { ContactList } from '../../components/contacts/ContactList';
import { ContactForm } from '../../components/contacts/ContactForm';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await api.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleAdd = async (contact) => {
    try {
      await api.post('/contacts', contact);
      setShowForm(false);
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleDelete = async (contactId) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await api.delete(`/contacts/${contactId}`);
              fetchContacts();
            } catch (error) {
              console.error('Error deleting contact:', error);
            }
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button
          title={showForm ? 'Cancel' : 'Add Contact'}
          onPress={() => setShowForm(!showForm)}
          style={showForm ? styles.cancelButton : styles.addButton}
        />
      </View>

      {showForm && (
        <View style={styles.formContainer}>
          <ContactForm onSubmit={handleAdd} />
        </View>
      )}

      <View style={styles.listContainer}>
        <ContactList
          contacts={contacts}
          onDelete={handleDelete}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#2196F3',
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
});

export default Contacts;
