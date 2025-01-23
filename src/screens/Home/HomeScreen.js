import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  ScreenWrapper,
  Card,
  List,
  ListItem,
  Button,
  Row,
} from '../../components/common';
import { sharedStyles } from '../../theme/sharedStyles';
import { useSelector } from 'react-redux';

export const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.auth.user);

  const menuItems = [
    {
      id: 'profile',
      title: t('home.menu.profile'),
      onPress: () => navigation.navigate('Profile'),
    },
    {
      id: 'contacts',
      title: t('home.menu.contacts'),
      onPress: () => navigation.navigate('Contacts'),
    },
    {
      id: 'documents',
      title: t('home.menu.documents'),
      onPress: () => navigation.navigate('Documents'),
    },
    {
      id: 'calendar',
      title: t('home.menu.calendar'),
      onPress: () => navigation.navigate('Calendar'),
    },
  ];

  return (
    <ScreenWrapper>
      <ScrollView
        style={sharedStyles.scrollView}
        contentContainerStyle={sharedStyles.contentContainer}
      >
        <View style={sharedStyles.header}>
          <Text style={sharedStyles.title}>
            {t('home.welcome', { name: user?.firstName })}
          </Text>
          <Text style={sharedStyles.subtitle}>{t('home.subtitle')}</Text>
        </View>

        <Card gradient>
          <Text style={[sharedStyles.h2, sharedStyles.mb16]}>
            {t('home.quickActions')}
          </Text>
          <Row style={sharedStyles.gap16}>
            <Button
              title={t('home.actions.newContact')}
              variant="secondary"
              onPress={() => navigation.navigate('CreateContact')}
              style={{ flex: 1 }}
            />
            <Button
              title={t('home.actions.newDocument')}
              variant="secondary"
              onPress={() => navigation.navigate('CreateDocument')}
              style={{ flex: 1 }}
            />
          </Row>
        </Card>

        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.id}
              isLast={index === menuItems.length - 1}
              onPress={item.onPress}
            >
              <Text style={sharedStyles.body1}>{item.title}</Text>
            </ListItem>
          ))}
        </List>

        <Card>
          <Text style={[sharedStyles.h2, sharedStyles.mb16]}>
            {t('home.recentActivity')}
          </Text>
          <List>
            {/* Activité récente à implémenter */}
            <ListItem>
              <Text style={sharedStyles.body2}>
                {t('home.noRecentActivity')}
              </Text>
            </ListItem>
          </List>
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
};
