Password for 'https://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@github.com':Password for 'https://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@github.com':import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenWrapper } from '../../components/common/ScreenWrapper';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../../components/common/CustomInput';

const CreateContactScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    address: '',
    organization: '',
    department: '',
    notes: '',
    isActive: true,
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Implement contact creation logic
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('contacts.create.title')}</Text>
          <Text style={styles.subtitle}>{t('contacts.create.subtitle')}</Text>
        </View>

        <LinearGradient
          colors={colors.background.gradient.primary}
          style={styles.formContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <CustomInput
            label={t('contacts.form.name')}
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
            placeholder={t('contacts.form.namePlaceholder')}
            icon="account"
          />

          <CustomInput
            label={t('contacts.form.role')}
            value={formData.role}
            onChangeText={(value) => handleChange('role', value)}
            placeholder={t('contacts.form.rolePlaceholder')}
            icon="briefcase"
          />

          <CustomInput
            label={t('contacts.form.email')}
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            placeholder={t('contacts.form.emailPlaceholder')}
            icon="email"
            keyboardType="email-address"
          />

          <CustomInput
            label={t('contacts.form.phone')}
            value={formData.phone}
            onChangeText={(value) => handleChange('phone', value)}
            placeholder={t('contacts.form.phonePlaceholder')}
            icon="phone"
            keyboardType="phone-pad"
          />

          <CustomInput
            label={t('contacts.form.address')}
            value={formData.address}
            onChangeText={(value) => handleChange('address', value)}
            placeholder={t('contacts.form.addressPlaceholder')}
            icon="map-marker"
            multiline
          />

          <CustomInput
            label={t('contacts.form.organization')}
            value={formData.organization}
            onChangeText={(value) => handleChange('organization', value)}
            placeholder={t('contacts.form.organizationPlaceholder')}
            icon="office-building"
          />

          <CustomInput
            label={t('contacts.form.department')}
            value={formData.department}
            onChangeText={(value) => handleChange('department', value)}
            placeholder={t('contacts.form.departmentPlaceholder')}
            icon="briefcase"
          />

          <CustomInput
            label={t('contacts.form.notes')}
            value={formData.notes}
            onChangeText={(value) => handleChange('notes', value)}
            placeholder={t('contacts.form.notesPlaceholder')}
            icon="note-text"
            multiline
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>{t('contacts.form.isActive')}</Text>
            <Switch
              value={formData.isActive}
              onValueChange={(value) => handleChange('isActive', value)}
              trackColor={{ false: colors.text.disabled, true: colors.secondary.main }}
              thumbColor={formData.isActive ? colors.primary.main : colors.background.paper}
            />
          </View>
        </LinearGradient>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonTextCancel}>{t('common.cancel')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={styles.buttonTextSave}>{t('common.save')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    ...typography.styles.h1,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.styles.body1,
    color: colors.text.secondary,
  },
  formContainer: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    ...colors.shadows.medium,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  switchLabel: {
    ...typography.styles.body1,
    color: colors.text.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: colors.background.paper,
    borderWidth: 1,
    borderColor: colors.primary.main,
  },
  saveButton: {
    backgroundColor: colors.primary.main,
  },
  buttonTextCancel: {
    ...typography.styles.button,
    color: colors.primary.main,
  },
  buttonTextSave: {
    ...typography.styles.button,
    color: colors.background.paper,
  },
});

export default CreateContactScreen;
