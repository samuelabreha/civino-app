import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      id: '1',
      type: 'teacher',
      firstName: 'Marie',
      lastName: 'Martin',
      role: 'Enseignante',
      email: 'marie.martin@ecole.ch',
      phone: '079 123 45 67',
    },
    {
      id: '2',
      type: 'monitor',
      firstName: 'Pierre',
      lastName: 'Dubois',
      role: 'Moniteur FINC',
      email: 'pierre.dubois@finc.ch',
      phone: '078 234 56 78',
    },
    {
      id: '3',
      type: 'parent',
      firstName: 'Sophie',
      lastName: 'Bernard',
      role: 'Parent',
      email: 'sophie.bernard@email.ch',
      phone: '077 345 67 89',
    },
  ];

  const getIconForType = (type) => {
    switch (type) {
      case 'teacher':
        return 'school';
      case 'monitor':
        return 'person';
      case 'parent':
        return 'people';
      default:
        return 'person-outline';
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={() => navigation.navigate('ContactDetails', { contact: item })}
    >
      <View style={styles.contactInfo}>
        <Icon name={getIconForType(item.type)} size={40} color="#2196F3" />
        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
          <Text style={styles.contactRole}>{item.role}</Text>
          <Text style={styles.contactEmail}>{item.email}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => {/* Logique pour appeler */}}
      >
        <Icon name="phone" size={24} color="#4CAF50" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="contacts" size={40} color="#2196F3" />
        <Text style={styles.title}>Contacts</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#757575" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un contact..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contactsList}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Icon name="add" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Ajouter un Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  contactsList: {
    padding: 15,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactDetails: {
    marginLeft: 15,
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contactRole: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  contactEmail: {
    fontSize: 14,
    color: '#2196F3',
    marginTop: 2,
  },
  callButton: {
    padding: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    margin: 15,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ContactListScreen;
