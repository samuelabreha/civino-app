import React from 'react';
import { View, StyleSheet } from 'react-native';
import { sharedStyles } from '../../theme/sharedStyles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/colors';

export const List = ({ children, style }) => {
  return (
    <LinearGradient
      colors={colors.background.gradient.primary}
      style={[styles.container, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

export const ListItem = ({ children, isLast, style }) => (
  <View style={[styles.item, isLast && styles.lastItem, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 24,
  },
  content: {
    ...sharedStyles.list,
  },
  item: {
    ...sharedStyles.listItem,
  },
  lastItem: {
    ...sharedStyles.listItemLast,
  },
});
