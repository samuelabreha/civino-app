import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Button from '../Button';

// Mock StyleSheet.flatten
StyleSheet.flatten = jest.fn(style => style);

// Mock Icon component
jest.mock('../Icon', () => {
  return function MockIcon(props) {
    return <div data-testid={props.testID || 'mock-icon'} {...props} />;
  };
});

describe('Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Button testID="test-button">
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    expect(button).toBeTruthy();
  });

  it('handles press events correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="test-button"
        onPress={onPress}
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('renders loading state correctly', () => {
    const { getByTestId } = render(
      <Button
        testID="test-button"
        loading
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    const activityIndicator = getByTestId('loading-indicator');
    expect(activityIndicator).toBeTruthy();
    expect(button.props.disabled).toBe(true);
  });

  it('renders disabled state correctly', () => {
    const { getByTestId } = render(
      <Button
        testID="test-button"
        disabled
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    expect(button.props.disabled).toBe(true);
  });

  it('renders icon correctly', () => {
    const { getByTestId } = render(
      <Button
        testID="test-button"
        icon="star"
      >
        Test Button
      </Button>
    );
    const icon = getByTestId('mock-icon');
    expect(icon).toBeTruthy();
    expect(icon.props.name).toBe('star');
  });

  it('applies variant styles correctly', () => {
    const { getByTestId } = render(
      <Button
        testID="test-button"
        variant="outlined"
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toEqual(
      expect.objectContaining({
        borderWidth: expect.any(Number),
      })
    );
  });

  it('applies size styles correctly', () => {
    const { getByTestId } = render(
      <Button
        testID="test-button"
        size="large"
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toEqual(
      expect.objectContaining({
        height: expect.any(Number),
        paddingHorizontal: expect.any(Number),
      })
    );
  });

  it('applies custom styles correctly', () => {
    const customStyle = {
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
    };
    const { getByTestId } = render(
      <Button
        testID="test-button"
        style={customStyle}
      >
        Test Button
      </Button>
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });
});
