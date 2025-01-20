import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { icons } from '../../../constants/assets';

const EvaluationSlot = ({ value, onSelect, isSelected }) => {
  const getIconSource = () => {
    return icons.behavioral.community[value];
  };

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={() => onSelect(value)}
    >
      <Image
        source={getIconSource()}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default EvaluationSlot;
