import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  error,
  multiline,
  keyboardType = 'default',
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.inputError]}>
        {icon && (
          <Icon
            name={icon}
            size={20}
            color={colors.text.secondary}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
            icon && styles.inputWithIcon,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.disabled}
          multiline={multiline}
          keyboardType={keyboardType}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    ...typography.styles.body2,
    color: colors.text.primary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.paper,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.divider,
    minHeight: 48,
  },
  inputError: {
    borderColor: colors.error.main,
  },
  icon: {
    marginLeft: 16,
  },
  input: {
    flex: 1,
    ...typography.styles.body1,
    color: colors.text.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputWithIcon: {
    paddingLeft: 8,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    ...typography.styles.caption,
    color: colors.error.main,
    marginTop: 4,
  },
});

export default CustomInput;
