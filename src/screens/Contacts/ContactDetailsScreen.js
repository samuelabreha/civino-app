import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactDetailsScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { contactId } = route.params;
  const [isEditing, setIsEditing] = useState(false);

  const contact = {
    id: contactId,
    name: 'John Doe',
    role: 'teacher',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country',
    organization: 'School Name',
    department: 'Mathematics',
    availability: [
      { day: 'Monday', hours: '9:00 - 17:00' },
      { day: 'Tuesday', hours: '9:00 - 17:00' },
      { day: 'Wednesday', hours: '9:00 - 17:00' },
      { day: 'Thursday', hours: '9:00 - 17:00' },
      { day: 'Friday', hours: '9:00 - 15:00' },
    ],
    notes: 'Preferred contact method: email',
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${contact.name}\n${contact.phone}\n${contact.email}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCall = () => {
    // Implement phone call functionality
  };

  const handleEmail = () => {
    // Implement email functionality
  };

  const handleMessage = () => {
    // Implement messaging functionality
  };

  const handleDelete = () => {
    Alert.alert(
      t('contacts.deleteTitle'),
      t('contacts.deleteMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.delete'),
          onPress: () => {
            // Implement contact deletion
            navigation.goBack();
          },
          style: 'destructive',
        },
      ]
    );
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View
            style={[
              styles.avatarContainer,
              { backgroundColor: getRoleColor(contact.role) },
            ]}
          >
            <Text style={styles.avatarText}>
              {contact.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </Text>
          </View>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.role}>{t(`contacts.role.${contact.role}`)}</Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleCall}
            >
              <Icon name="phone" size={24} color="#2196F3" />
              <Text style={styles.actionText}>{t('contacts.call')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleMessage}
            >
              <Icon name="message" size={24} color="#4CAF50" />
              <Text style={styles.actionText}>{t('contacts.message')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleEmail}
            >
              <Icon name="email" size={24} color="#FF9800" />
              <Text style={styles.actionText}>{t('contacts.email')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.contactInfo')}</Text>
          <View style={styles.infoItem}>
            <Icon name="phone" size={20} color="#666" />
            <Text style={styles.infoText}>{contact.phone}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="email" size={20} color="#666" />
            <Text style={styles.infoText}>{contact.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="map-marker" size={20} color="#666" />
            <Text style={styles.infoText}>{contact.address}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.professional')}</Text>
          <View style={styles.infoItem}>
            <Icon name="domain" size={20} color="#666" />
            <Text style={styles.infoText}>{contact.organization}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="folder" size={20} color="#666" />
            <Text style={styles.infoText}>{contact.department}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.availability')}</Text>
          {contact.availability.map((schedule, index) => (
            <View key={index} style={styles.scheduleItem}>
              <Text style={styles.scheduleDay}>{schedule.day}</Text>
              <Text style={styles.scheduleHours}>{schedule.hours}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.notes')}</Text>
          <Text style={styles.notes}>{contact.notes}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('EditContact', { contactId })}
        >
          <Icon name="pencil" size={20} color="#2196F3" />
          <Text style={[styles.footerButtonText, { color: '#2196F3' }]}>
            {t('contacts.edit')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleShare}>
          <Icon name="share-variant" size={20} color="#4CAF50" />
          <Text style={[styles.footerButtonText, { color: '#4CAF50' }]}>
            {t('contacts.share')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleDelete}>
          <Icon name="delete" size={20} color="#F44336" />
          <Text style={[styles.footerButtonText, { color: '#F44336' }]}>
            {t('contacts.delete')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  scheduleDay: {
    fontSize: 16,
    color: '#333',
  },
  scheduleHours: {
    fontSize: 16,
    color: '#666',
  },
  notes: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContactDetailsScreen;
