import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons, logos } from '../constants/assets';
import { typography } from '../styles/theme';

const Header = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={icons.general.arrowBack} style={styles.icon} />
        </TouchableOpacity>
      )}
      <Image source={logos.default} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profileButton}>
        <Image source={icons.general.user} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  backButton: {
    padding: 8,
  },
  profileButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    height: 40,
    width: 120,
    resizeMode: 'contain',
  },
});

export default Header;
