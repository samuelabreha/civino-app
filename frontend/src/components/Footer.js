import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, typography } from '../styles/globalStyles';

const Footer = () => {
  const navigation = useNavigation();

  const menuItems = [
    { name: 'Accueil', route: 'Home', icon: '🏠' },
    { name: 'Documents', route: 'Documents', icon: '📄' },
    { name: 'Contacts', route: 'Contacts', icon: '👥' },
    { name: 'Paramètres', route: 'Settings', icon: '⚙️' },
  ];

  return (
    <View style={styles.footer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.route)}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  menuItem: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: 2,
  },
  menuText: {
    fontSize: 12,
    ...typography.caption,
  },
});

export default Footer;
