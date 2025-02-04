import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EditContactScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { contactId } = route.params;

  const [formData, setFormData] = useState({
    name: 'John Doe',
    role: 'teacher',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country',
    organization: 'School Name',
    department: 'Mathematics',
    notes: 'Preferred contact method: email',
  });

  const [availability, setAvailability] = useState({
    monday: { active: true, start: '09:00', end: '17:00' },
    tuesday: { active: true, start: '09:00', end: '17:00' },
    wednesday: { active: true, start: '09:00', end: '17:00' },
    thursday: { active: true, start: '09:00', end: '17:00' },
    friday: { active: true, start: '09:00', end: '15:00' },
  });

  const roles = [
    { id: 'teacher', title: t('contacts.role.teacher'), icon: 'school' },
    { id: 'referent', title: t('contacts.role.referent'), icon: 'account-tie' },
    { id: 'monitor', title: t('contacts.role.monitor'), icon: 'account-supervisor' },
  ];

  useEffect(() => {
    // Load contact data
    // This would typically fetch the contact data from your backend
  }, [contactId]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day],
        [field]: value,
      },
    });
  };

  const handleSave = () => {
    // Implement save changes logic
    Alert.alert(
      t('contacts.saveChangesTitle'),
      t('contacts.saveChangesMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.save'),
          onPress: () => {
            // Save changes and navigate back
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleCancel = () => {
    Alert.alert(
      t('contacts.discardChangesTitle'),
      t('contacts.discardChangesMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.discard'),
          onPress: () => navigation.goBack(),
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.basicInfo')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('contacts.namePlaceholder')}
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />

          <Text style={styles.fieldLabel}>{t('contacts.selectRole')}</Text>
          <View style={styles.rolesContainer}>
            {roles.map((role) => (
              <TouchableOpacity
                key={role.id}
                style={[
                  styles.roleButton,
                  formData.role === role.id && styles.selectedRole,
                ]}
                onPress={() => handleInputChange('role', role.id)}
              >
                <Icon
                  name={role.icon}
                  size={24}
                  color={formData.role === role.id ? '#FFFFFF' : '#666'}
                />
                <Text
                  style={[
                    styles.roleText,
                    formData.role === role.id && styles.selectedRoleText,
                  ]}
                >
                  {role.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.contactInfo')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('contacts.emailPlaceholder')}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder={t('contacts.phonePlaceholder')}
            value={formData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder={t('contacts.addressPlaceholder')}
            value={formData.address}
            onChangeText={(value) => handleInputChange('address', value)}
            multiline
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.professional')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('contacts.organizationPlaceholder')}
            value={formData.organization}
            onChangeText={(value) => handleInputChange('organization', value)}
          />
          <TextInput
            style={styles.input}
            placeholder={t('contacts.departmentPlaceholder')}
            value={formData.department}
            onChangeText={(value) => handleInputChange('department', value)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.availability')}</Text>
          {Object.entries(availability).map(([day, schedule]) => (
            <View key={day} style={styles.scheduleRow}>
              <View style={styles.scheduleDay}>
                <Switch
                  value={schedule.active}
                  onValueChange={(value) =>
                    handleAvailabilityChange(day, 'active', value)
                  }
                />
                <Text style={styles.dayText}>
                  {t(`contacts.days.${day}`)}
                </Text>
              </View>
              {schedule.active && (
                <View style={styles.timeInputs}>
                  <TextInput
                    style={styles.timeInput}
                    value={schedule.start}
                    onChangeText={(value) =>
                      handleAvailabilityChange(day, 'start', value)
                    }
                    placeholder="09:00"
                  />
                  <Text style={styles.timeSeparator}>-</Text>
                  <TextInput
                    style={styles.timeInput}
                    value={schedule.end}
                    onChangeText={(value) =>
                      handleAvailabilityChange(day, 'end', value)
                    }
                    placeholder="17:00"
                  />
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('contacts.notes')}</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder={t('contacts.notesPlaceholder')}
            value={formData.notes}
            onChangeText={(value) => handleInputChange('notes', value)}
            multiline
            numberOfLines={4}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancel}
        >
          <Text style={styles.cancelButtonText}>{t('common.cancel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>{t('common.save')}</Text>
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
  fieldLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  rolesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: '#2196F3',
  },
  roleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 5,
  },
  selectedRoleText: {
    color: '#FFFFFF',
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  scheduleDay: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  timeInputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timeInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    width: 80,
    textAlign: 'center',
  },
  timeSeparator: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  saveButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default EditContactScreen;
