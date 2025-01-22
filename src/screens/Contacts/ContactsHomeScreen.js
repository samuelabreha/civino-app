import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactsHomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      role: 'teacher',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'referent',
      email: 'jane.smith@example.com',
      phone: '+1234567891',
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'monitor',
      email: 'mike.johnson@example.com',
      phone: '+1234567892',
      avatar: 'https://example.com/avatar3.jpg',
    },
    // Add more contacts
  ];

  const filters = [
    { id: 'all', label: t('contacts.filterAll') },
    { id: 'teacher', label: t('contacts.filterTeachers') },
    { id: 'referent', label: t('contacts.filterReferents') },
    { id: 'monitor', label: t('contacts.filterMonitors') },
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case 'teacher':
        return 'school';
      case 'referent':
        return 'account-tie';
      case 'monitor':
        return 'account-supervisor';
      default:
        return 'account';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'teacher':
        return '#2196F3';
      case 'referent':
        return '#4CAF50';
      case 'monitor':
        return '#FF9800';
      default:
        return '#666';
    }
  };

  const handleContactPress = (contact) => {
    navigation.navigate('ContactDetails', { contactId: contact.id });
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={() => handleContactPress(item)}
    >
      <View
        style={[styles.avatarContainer, { backgroundColor: getRoleColor(item.role) }]}
      >
        <Icon name={getRoleIcon(item.role)} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactRole}>
          {t(`contacts.role.${item.role}`)}
        </Text>
      </View>
      <TouchableOpacity style={styles.contactAction}>
        <Icon name="chevron-right" size={24} color="#666" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const filteredContacts = contacts.filter(
    (contact) =>
      (selectedFilter === 'all' || contact.role === selectedFilter) &&
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={t('contacts.searchPlaceholder')}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.activeFilter,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter.id && styles.activeFilterText,
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contactsList}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreateContact')}
      >
        <Icon name="plus" size={24} color="#FFFFFF" />
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
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterContainer: {
    paddingVertical: 10,
  },
  filterScroll: {
    paddingHorizontal: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#2196F3',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  contactsList: {
    padding: 20,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  contactRole: {
    fontSize: 14,
    color: '#666',
  },
  contactAction: {
    padding: 5,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ContactsHomeScreen;
