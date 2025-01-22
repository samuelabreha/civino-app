import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Typography from '../Typography';
import Icon from '../Icon';
import { theme } from '../../../theme';
import { styles } from './styles';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  variant = 'outlined',
  error,
  helperText,
  startIcon,
  endIcon,
  secureTextEntry,
  multiline,
  numberOfLines = 1,
  style,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getVariantStyles = () => {
    const variants = {
      outlined: {
        borderWidth: 1,
        borderColor: error
          ? theme.colors.error.main
          : isFocused
          ? theme.colors.primary.main
          : theme.colors.divider,
        backgroundColor: 'transparent',
      },
      filled: {
        borderWidth: 0,
        backgroundColor: error
          ? theme.colors.error.light
          : isFocused
          ? theme.colors.primary.light
          : theme.colors.grey[100],
      },
      standard: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: error
          ? theme.colors.error.main
          : isFocused
          ? theme.colors.primary.main
          : theme.colors.divider,
        backgroundColor: 'transparent',
        borderRadius: 0,
      },
    };

    return variants[variant] || variants.outlined;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Typography
          variant="caption"
          color={error ? 'error' : isFocused ? 'primary' : 'text.secondary'}
          style={styles.label}
        >
          {label}
        </Typography>
      )}
      <View style={[styles.inputContainer, getVariantStyles()]}>
        {startIcon && (
          <View style={styles.iconContainer}>
            <Icon
              name={startIcon}
              size={20}
              color={error ? 'error' : isFocused ? 'primary' : 'grey.500'}
            />
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            {
              color: error
                ? theme.colors.error.main
                : theme.colors.text.primary,
            },
            multiline && { height: 20 * numberOfLines },
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.secondary}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          multiline={multiline}
          numberOfLines={numberOfLines}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="grey.500"
            />
          </TouchableOpacity>
        )}
        {endIcon && !secureTextEntry && (
          <View style={styles.iconContainer}>
            <Icon
              name={endIcon}
              size={20}
              color={error ? 'error' : isFocused ? 'primary' : 'grey.500'}
            />
          </View>
        )}
      </View>
      {helperText && (
        <Typography
          variant="caption"
          color={error ? 'error' : 'text.secondary'}
          style={styles.helperText}
        >
          {helperText}
        </Typography>
      )}
    </View>
  );
};

export default Input;
