import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles onPress correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies variant styles correctly', () => {
    const { getByTestId } = render(
      <Button
        title="Test Button"
        variant="outlined"
        testID="test-button"
      />
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        borderWidth: 1,
      })
    );
  });

  it('applies color styles correctly', () => {
    const { getByTestId } = render(
      <Button
        title="Test Button"
        color="primary"
        testID="test-button"
      />
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: expect.any(String),
      })
    );
  });

  it('applies size styles correctly', () => {
    const { getByTestId } = render(
      <Button
        title="Test Button"
        size="large"
        testID="test-button"
      />
    );
    const button = getByTestId('test-button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        paddingVertical: expect.any(Number),
        paddingHorizontal: expect.any(Number),
      })
    );
  });

  it('handles disabled state correctly', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        title="Test Button"
        disabled
        onPress={onPressMock}
        testID="test-button"
      />
    );
    
    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        opacity: 0.5,
      })
    );
  });

  it('displays loading state correctly', () => {
    const { getByTestId, queryByText } = render(
      <Button
        title="Test Button"
        loading
        testID="test-button"
      />
    );
    
    expect(queryByText('Test Button')).toBeNull();
    expect(getByTestId('test-button')).toContainElement(
      expect.objectContaining({
        type: 'ActivityIndicator',
      })
    );
  });

  it('renders start and end icons correctly', () => {
    const startIcon = <Icon name="star" />;
    const endIcon = <Icon name="arrow-right" />;
    
    const { getByTestId } = render(
      <Button
        title="Test Button"
        startIcon={startIcon}
        endIcon={endIcon}
        testID="test-button"
      />
    );
    
    const button = getByTestId('test-button');
    expect(button).toContainElement(startIcon);
    expect(button).toContainElement(endIcon);
  });
});
