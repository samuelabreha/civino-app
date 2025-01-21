import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../Input';

describe('Input', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Input testID="test-input" />);
    expect(getByTestId('test-input')).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <Input
        testID="test-input"
        onChangeText={onChangeTextMock}
      />
    );
    
    fireEvent.changeText(getByTestId('test-input'), 'test input');
    expect(onChangeTextMock).toHaveBeenCalledWith('test input');
  });

  it('displays label correctly', () => {
    const { getByText } = render(
      <Input label="Test Label" />
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('displays placeholder correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Test Placeholder" />
    );
    expect(getByPlaceholderText('Test Placeholder')).toBeTruthy();
  });

  it('handles focus and blur events correctly', () => {
    const { getByTestId } = render(
      <Input testID="test-input" />
    );
    const input = getByTestId('test-input');
    
    fireEvent(input, 'focus');
    expect(input.props.style).toContainEqual(
      expect.objectContaining({
        borderColor: expect.any(String),
      })
    );
    
    fireEvent(input, 'blur');
    expect(input.props.style).toContainEqual(
      expect.objectContaining({
        borderColor: expect.any(String),
      })
    );
  });

  it('displays error state correctly', () => {
    const { getByTestId, getByText } = render(
      <Input
        testID="test-input"
        error
        helperText="Error message"
      />
    );
    
    const input = getByTestId('test-input');
    expect(input.props.style).toContainEqual(
      expect.objectContaining({
        borderColor: expect.any(String),
      })
    );
    expect(getByText('Error message')).toBeTruthy();
  });

  it('handles password visibility toggle correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        secureTextEntry
      />
    );
    
    const input = getByTestId('test-input');
    const visibilityToggle = getByTestId('visibility-toggle');
    
    expect(input.props.secureTextEntry).toBe(true);
    fireEvent.press(visibilityToggle);
    expect(input.props.secureTextEntry).toBe(false);
  });

  it('renders start and end icons correctly', () => {
    const { getByTestId } = render(
      <Input
        testID="test-input"
        startIcon="mail"
        endIcon="check"
      />
    );
    
    expect(getByTestId('start-icon')).toBeTruthy();
    expect(getByTestId('end-icon')).toBeTruthy();
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
    expect(input.props.style).toContainEqual(
      expect.objectContaining({
        height: expect.any(Number),
      })
    );
  });
});
