import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  ScreenWrapper,
  Form,
  CustomInput,
  Button,
  Row,
} from '../../components/common';
import { sharedStyles } from '../../theme/sharedStyles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/authSlice';
import { firebaseService } from '../../services/firebase.service';

export const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        t('auth.error'),
        t('auth.fillAllFields'),
        [{ text: t('common.ok') }]
      );
      return;
    }

    setLoading(true);
    try {
      const user = await firebaseService.signIn(email, password);
      dispatch(setUser(user));
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(
        t('auth.error'),
        t('auth.invalidCredentials'),
        [{ text: t('common.ok') }]
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View style={sharedStyles.contentContainer}>
        <View style={sharedStyles.header}>
          <Text style={sharedStyles.title}>{t('auth.login.title')}</Text>
          <Text style={sharedStyles.subtitle}>
            {t('auth.login.subtitle')}
          </Text>
        </View>

        <Form>
          <CustomInput
            label={t('auth.login.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <CustomInput
            label={t('auth.login.password')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Row spaceBetween style={sharedStyles.mt16}>
            <Button
              title={t('auth.login.forgotPassword')}
              variant="text"
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </Row>
        </Form>

        <Button
          title={t('auth.login.submit')}
          variant="gradient"
          onPress={handleLogin}
          loading={loading}
          style={sharedStyles.mt24}
        />

        <Row style={[sharedStyles.mt24, sharedStyles.center]}>
          <Text style={sharedStyles.subtitle}>
            {t('auth.login.noAccount')}
          </Text>
          <Button
            title={t('auth.login.register')}
            variant="text"
            onPress={() => navigation.navigate('Register')}
          />
        </Row>
      </View>
    </ScreenWrapper>
  );
};
