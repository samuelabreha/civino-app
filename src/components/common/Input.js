import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';
import { theme } from '../../theme';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  helperText,
  multiline = false,
  numberOfLines = 1,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  style,
  inputStyle,
  disabled = false,
  required = false,
  testID, // Ajout de testID
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  const handleFocus = () => {
    setIsFocused(true);
    animateLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      animateLabel(0);
    }
  };

  const animateLabel = (toValue) => {
    Animated.timing(animation, {
      toValue,
      duration: theme.animations.timing.medium,
      easing: theme.animations.easing.standard,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    position: 'absolute',
    left: theme.spacing.sm,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.spacing.md, 0],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.typography.sizes.body1, theme.typography.sizes.caption],
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.text.secondary, theme.colors.primary.main],
    }),
  };

  return (
    <View testID={testID} style={[styles.container, style]} {...props}> // Utilisation de testID
      <Animated.Text style={[styles.label, labelStyle]}>
        {label}
        {required && <Text style={styles.required}> *</Text>}
      </Animated.Text>
      
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focused,
          error && styles.error,
          disabled && styles.disabled,
          multiline && styles.multiline,
          inputStyle,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={isFocused ? placeholder : ''}
        placeholderTextColor={theme.colors.text.hint}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={!disabled}
        {...props}
      />
      
      {(error || helperText) && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.sm,
  },
  input: {
    height: 56,
    paddingHorizontal: theme.spacing.sm,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.grey[300],
    borderRadius: theme.shape.borderRadius.sm,
    backgroundColor: theme.colors.background.paper,
    color: theme.colors.text.primary,
    fontSize: theme.typography.sizes.body1,
    fontFamily: theme.typography.fontFamily.primary,
  },
  multiline: {
    height: 'auto',
    minHeight: 56,
    paddingTop: theme.spacing.xl,
    textAlignVertical: 'top',
  },
  label: {
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: theme.typography.fontWeights.medium,
  },
  focused: {
    borderColor: theme.colors.primary.main,
    borderWidth: 2,
  },
  error: {
    borderColor: theme.colors.error.main,
  },
  disabled: {
    backgroundColor: theme.colors.grey[100],
    borderColor: theme.colors.grey[300],
  },
  helperText: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.sizes.caption,
    color: theme.colors.text.secondary,
    fontFamily: theme.typography.fontFamily.primary,
  },
  errorText: {
    color: theme.colors.error.main,
  },
  required: {
    color: theme.colors.error.main,
  },
});

export default Input;
