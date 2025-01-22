import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutScreen = () => {
  const { t } = useTranslation();

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const renderLink = (icon, title, description, url) => (
    <TouchableOpacity
      style={styles.linkItem}
      onPress={() => handleLinkPress(url)}
    >
      <Icon name={icon} size={24} color="#2196F3" />
      <View style={styles.linkContent}>
        <Text style={styles.linkTitle}>{title}</Text>
        <Text style={styles.linkDescription}>{description}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>CIVINO</Text>
        <Text style={styles.version}>Version 1.0.0 (Build 100)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.about.description')}</Text>
        <Text style={styles.description}>
          {t('settings.about.appDescription')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.about.links')}</Text>

        {renderLink(
          'web',
          t('settings.about.website'),
          t('settings.about.websiteDescription'),
          'https://www.civino.org'
        )}

        {renderLink(
          'help-circle',
          t('settings.about.help'),
          t('settings.about.helpDescription'),
          'https://help.civino.org'
        )}

        {renderLink(
          'shield-check',
          t('settings.about.privacy'),
          t('settings.about.privacyDescription'),
          'https://www.civino.org/privacy'
        )}

        {renderLink(
          'file-document',
          t('settings.about.terms'),
          t('settings.about.termsDescription'),
          'https://www.civino.org/terms'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.about.support')}</Text>

        {renderLink(
          'email',
          t('settings.about.contact'),
          t('settings.about.contactDescription'),
          'mailto:support@civino.org'
        )}

        {renderLink(
          'star',
          t('settings.about.rate'),
          t('settings.about.rateDescription'),
          'market://details?id=org.civino.app'
        )}

        {renderLink(
          'share',
          t('settings.about.share'),
          t('settings.about.shareDescription'),
          'share://civino'
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.about.credits')}</Text>
        <View style={styles.credits}>
          <Text style={styles.creditText}>
            {t('settings.about.developedBy')}
          </Text>
          <TouchableOpacity
            onPress={() => handleLinkPress('https://www.civino.org/team')}
          >
            <Text style={styles.creditLink}>CIVINO Team</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.copyright}>
          © 2024 CIVINO. {t('settings.about.allRightsReserved')}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    padding: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  linkContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  linkTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  linkDescription: {
    fontSize: 14,
    color: '#666',
  },
  credits: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  creditText: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  creditLink: {
    fontSize: 14,
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  copyright: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default AboutScreen;
