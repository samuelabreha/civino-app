import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ScreenWrapper } from '../../../components/common/ScreenWrapper';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/typography';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCreationScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('profileCreation.status.title'),
      description: t('profileCreation.status.description'),
      screen: 'StatusInput',
    },
    {
      title: t('profileCreation.lastName.title'),
      description: t('profileCreation.lastName.description'),
      screen: 'NameInput',
    },
    {
      title: t('profileCreation.firstName.title'),
      description: t('profileCreation.firstName.description'),
      screen: 'FirstNameInput',
    },
    {
      title: t('profileCreation.behaviorContracts.title'),
      description: t('profileCreation.behaviorContracts.description'),
      screen: 'BehaviorContracts',
    },
    {
      title: t('profileCreation.questionnaires.title'),
      description: t('profileCreation.questionnaires.description'),
      screen: 'Questionnaires',
    },
  ];

  return (
    <ScreenWrapper>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('profileCreation.title')}</Text>
          <Text style={styles.subtitle}>{t('profileCreation.subtitle')}</Text>
        </View>

        <LinearGradient
          colors={colors.background.gradient.primary}
          style={styles.stepsContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          {steps.map((step, index) => (
            <TouchableOpacity
              key={index}
              style={styles.stepCard}
              onPress={() => navigation.navigate(step.screen)}
            >
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.text.secondary} />
            </TouchableOpacity>
          ))}
        </LinearGradient>
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
  stepsContainer: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.paper,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    ...typography.styles.body2,
    color: colors.background.paper,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    ...typography.styles.h3,
    color: colors.text.primary,
    marginBottom: 4,
  },
  stepDescription: {
    ...typography.styles.body2,
    color: colors.text.secondary,
  },
});

export default ProfileCreationScreen;
