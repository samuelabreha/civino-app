import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Input from '../Input';

// Mock StyleSheet.flatten
StyleSheet.flatten = jest.fn(style => style);

// Mock Icon component
jest.mock('../Icon', () => {
  return function MockIcon(props) {
    return <div data-testid={props.testID || 'mock-icon'} {...props} />;
  };
});

describe('Input', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Input testID="test-input" />
    );
    const input = getByTestId('test-input');
    expect(input).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <Input
        testID="test-input"
        onChangeText={onChangeText}
      />
    );
    const input = getByTestId('test-input');
    fireEvent.changeText(input, 'test value');
    expect(onChangeText).toHaveBeenCalledWith('test value');
  });

  it('displays error state correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        error="Invalid input"
      />
    );
    const input = getByTestId('test-input');
    expect(input.props.style).toEqual(
      expect.objectContaining({
        borderColor: expect.any(String),
      })
    );
  });

  it('handles password visibility toggle correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        type="password"
      />
    );
    const input = getByTestId('test-input');
    expect(input.props.secureTextEntry).toBe(true);
  });

  it('renders start and end icons correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        startIcon="user"
        endIcon="eye"
      />
    );
    const startIcon = getByTestId('start-icon');
    const endIcon = getByTestId('end-icon');
    expect(startIcon).toBeTruthy();
    expect(endIcon).toBeTruthy();
  });

  it('handles multiline input correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        multiline
        numberOfLines={3}
      />
    );
    const input = getByTestId('test-input');
    expect(input.props.multiline).toBe(true);
    expect(input.props.numberOfLines).toBe(3);
  });

  it('applies custom styles correctly', () => {
    const customStyle = {
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
    };
    const { getByTestId } = render(
      <Input
        testID="test-input"
        style={customStyle}
      />
    );
    const input = getByTestId('test-input');
    expect(input.props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });
});
