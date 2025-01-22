import React from 'react';
import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Avatar from '../Avatar';

// Mock StyleSheet.flatten
StyleSheet.flatten = jest.fn(style => style);

// Mock Icon component
jest.mock('../Icon', () => {
  return function MockIcon(props) {
    return <div data-testid={props.testID || 'mock-icon'} {...props} />;
  };
});

describe('Avatar', () => {
  const testImage = { uri: 'https://example.com/avatar.jpg' };

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Avatar testID="test-avatar" />);
    const avatar = getByTestId('test-avatar');
    expect(avatar).toBeTruthy();
  });

  it('renders image when source is provided', () => {
    const { getByTestId } = render(
      <Avatar source={testImage} testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.source).toBe(testImage);
  });

  it('renders placeholder icon when no source is provided', () => {
    const { getByTestId } = render(<Avatar testID="test-avatar" />);
    const avatar = getByTestId('test-avatar');
    const icon = getByTestId('mock-icon');
    expect(icon).toBeTruthy();
  });

  it('applies size styles correctly', () => {
    const { getByTestId } = render(
      <Avatar size="large" testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.style).toEqual(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      })
    );
  });

  it('applies custom styles correctly', () => {
    const customStyle = {
      borderWidth: 2,
      borderColor: '#000',
    };
    const { getByTestId } = render(
      <Avatar style={customStyle} testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.style).toEqual(
      expect.objectContaining(customStyle)
    );
  });
});
