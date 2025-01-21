import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from '../Card';

describe('Card', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Card testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    expect(getByTestId('test-card')).toBeTruthy();
  });

  it('applies variant styles correctly', () => {
    const { getByTestId } = render(
      <Card variant="outlined" testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card.props.style).toContainEqual(
      expect.objectContaining({
        borderWidth: 1,
      })
    );
  });

  it('handles onPress correctly', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card onPress={onPressMock} testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    
    fireEvent.press(getByTestId('test-card'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders as View when no onPress is provided', () => {
    const { getByTestId } = render(
      <Card testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card.type).toBe('View');
  });

  it('renders as TouchableOpacity when onPress is provided', () => {
    const { getByTestId } = render(
      <Card onPress={() => {}} testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card.type).toBe('TouchableOpacity');
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      margin: 20,
      padding: 10,
    };
    const { getByTestId } = render(
      <Card style={customStyle} testID="test-card">
        <Text>Card Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card.props.style).toContainEqual(customStyle);
  });
});
