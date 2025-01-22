import React from 'react';
import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Icon from '../Icon';

// Mock StyleSheet.flatten
StyleSheet.flatten = jest.fn(style => style);

// Mock MaterialCommunityIcons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return function MockIcon(props) {
    return <div {...props} />;
  };
});

describe('Icon', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Icon name="home" testID="test-icon" />
    );
    expect(getByTestId('test-icon')).toBeTruthy();
  });

  it('applies size correctly', () => {
    const { getByTestId } = render(
      <Icon name="home" size={32} testID="test-icon" />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.size).toBe(32);
  });

  it('applies color correctly with direct color value', () => {
    const { getByTestId } = render(
      <Icon name="home" color="#FF0000" testID="test-icon" />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.color).toBe('#FF0000');
  });

  it('applies theme color correctly with dot notation', () => {
    const { getByTestId } = render(
      <Icon name="home" color="primary" testID="test-icon" />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.color).toBe('primary');
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      marginTop: 10,
      paddingHorizontal: 20,
    };
    const { getByTestId } = render(
      <Icon name="home" style={customStyle} testID="test-icon" />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.style).toEqual(customStyle);
  });

  it('passes through additional props correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Icon name="home" testID="test-icon" onPress={onPress} />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.onPress).toBe(onPress);
  });
});
