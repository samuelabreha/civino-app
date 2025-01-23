import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/colors';

export const ScreenWrapper = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background.default}
        barStyle="dark-content"
      />
      <LinearGradient
        colors={colors.background.gradient.secondary}
        style={[styles.gradient, style]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
});
