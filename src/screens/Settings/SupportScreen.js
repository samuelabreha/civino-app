import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SupportScreen = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const supportCategories = [
    { id: 'technical', icon: 'laptop', title: t('settings.support.technical') },
    { id: 'account', icon: 'account', title: t('settings.support.account') },
    { id: 'billing', icon: 'credit-card', title: t('settings.support.billing') },
    { id: 'feedback', icon: 'message', title: t('settings.support.feedback') },
    { id: 'other', icon: 'help-circle', title: t('settings.support.other') },
  ];

  const faqItems = [
    {
      question: t('settings.support.faq.question1'),
      answer: t('settings.support.faq.answer1'),
    },
    {
      question: t('settings.support.faq.question2'),
      answer: t('settings.support.faq.answer2'),
    },
    {
      question: t('settings.support.faq.question3'),
      answer: t('settings.support.faq.answer3'),
    },
  ];

  const handleSubmit = () => {
    if (!category) {
      Alert.alert(
        t('settings.support.error'),
        t('settings.support.selectCategory')
      );
      return;
    }

    if (!message.trim()) {
      Alert.alert(
        t('settings.support.error'),
        t('settings.support.enterMessage')
      );
      return;
    }

    Alert.alert(
      t('settings.support.success'),
      t('settings.support.messageSent'),
      [
        {
          text: t('common.ok'),
          onPress: () => {
            setMessage('');
            setCategory('');
          },
        },
      ]
    );
  };

  const renderCategory = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.categoryItem,
        category === item.id && styles.selectedCategory,
      ]}
      onPress={() => setCategory(item.id)}
    >
      <Icon
        name={item.icon}
        size={24}
        color={category === item.id ? '#2196F3' : '#666'}
      />
      <Text
        style={[
          styles.categoryTitle,
          category === item.id && styles.selectedCategoryTitle,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderFaqItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.faqItem}
      onPress={() => {
        // Expand/collapse FAQ item
      }}
    >
      <View style={styles.faqHeader}>
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <Icon name="chevron-down" size={24} color="#666" />
      </View>
      <Text style={styles.faqAnswer}>{item.answer}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('settings.support.title')}</Text>
        <Text style={styles.headerDescription}>
          {t('settings.support.description')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.support.categories')}</Text>
        <View style={styles.categoriesContainer}>
          {supportCategories.map(renderCategory)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.support.message')}</Text>
        <TextInput
          style={styles.messageInput}
          multiline
          placeholder={t('settings.support.messagePlaceholder')}
          value={message}
          onChangeText={setMessage}
          textAlignVertical="top"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>
            {t('settings.support.submit')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.support.faq')}</Text>
        {faqItems.map(renderFaqItem)}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.support.contact')}</Text>
        <TouchableOpacity style={styles.contactItem}>
          <Icon name="email" size={24} color="#2196F3" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>
              {t('settings.support.email')}
            </Text>
            <Text style={styles.contactValue}>support@civino.org</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem}>
          <Icon name="phone" size={24} color="#2196F3" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>
              {t('settings.support.phone')}
            </Text>
            <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem}>
          <Icon name="web" size={24} color="#2196F3" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>
              {t('settings.support.website')}
            </Text>
            <Text style={styles.contactValue}>help.civino.org</Text>
          </View>
        </TouchableOpacity>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  headerDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
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
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  categoryItem: {
    width: '45%',
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#E3F2FD',
  },
  categoryTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  selectedCategoryTitle: {
    color: '#2196F3',
    fontWeight: '600',
  },
  messageInput: {
    height: 150,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  faqItem: {
    marginBottom: 15,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  faqQuestion: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    padding: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 10,
  },
  contactInfo: {
    marginLeft: 15,
  },
  contactTitle: {
    fontSize: 14,
    color: '#666',
  },
  contactValue: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
  },
});

export default SupportScreen;
