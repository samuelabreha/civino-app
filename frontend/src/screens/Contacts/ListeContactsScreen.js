import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { icons } from '../../constants/assets';
import { typography } from '../../styles/theme';
import { colors } from '../../styles/globalStyles';
import Header from '../../components/Header';

const ListeContactsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState([
    {
      id: '1',
      nom: 'Dubois',
      prenom: 'Marie',
      role: 'Enseignante',
      email: 'marie.dubois@ecole.fr',
      telephone: '0123456789',
    },
    {
      id: '2',
      nom: 'Martin',
      prenom: 'Pierre',
      role: 'Moniteur FINC',
      email: 'pierre.martin@finc.fr',
      telephone: '0987654321',
    },
    // Ajoutez plus de contacts ici
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implémenter la logique de recherche
  };

  const handleAddContact = () => {
    navigation.navigate('Contacts/AjouterContactScreen');
  };

  const handleDeleteContact = (contactId) => {
    navigation.navigate('Contacts/SupprimerContactScreen', { contactId });
  };

  const handleContactPress = (contact) => {
    // Afficher les détails du contact ou ouvrir les options de communication
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.contactCard}
      onPress={() => handleContactPress(item)}
    >
      <Image source={icons.general.user} style={styles.avatar} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.prenom} {item.nom}</Text>
        <Text style={styles.contactRole}>{item.role}</Text>
        <Text style={styles.contactDetails}>{item.email}</Text>
        <Text style={styles.contactDetails}>{item.telephone}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleDeleteContact(item.id)}
        >
          <Image source={icons.general.trash} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Contacts" />
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un contact..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filtrer par rôle :</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Tous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButton, styles.filterButtonInactive]}>
              <Text style={styles.filterButtonTextInactive}>Enseignants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButton, styles.filterButtonInactive]}>
              <Text style={styles.filterButtonTextInactive}>Moniteurs</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={contacts}
          renderItem={renderContactItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contactsList}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddContact}
        >
          <Image source={icons.general.addContact} style={styles.addIcon} />
          <Text style={styles.addButtonText}>Ajouter un contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    ...typography.body,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterTitle: {
    ...typography.caption,
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  filterButtonInactive: {
    backgroundColor: colors.lightGray,
  },
  filterButtonText: {
    ...typography.caption,
    color: colors.white,
  },
  filterButtonTextInactive: {
    ...typography.caption,
    color: colors.gray,
  },
  contactsList: {
    paddingBottom: 80,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    ...typography.h3,
  },
  contactRole: {
    ...typography.caption,
    color: colors.primary,
  },
  contactDetails: {
    ...typography.caption,
    color: colors.gray,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  actionIcon: {
    width: 20,
    height: 20,
    tintColor: colors.gray,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
  },
  addIcon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
    marginRight: 8,
  },
  addButtonText: {
    ...typography.body,
    color: colors.white,
  },
});

export default ListeContactsScreen;
