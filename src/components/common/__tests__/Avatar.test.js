import React from 'react';
import { render } from '@testing-library/react-native';
import Avatar from '../Avatar';

describe('Avatar', () => {
  const testImage = { uri: 'https://example.com/avatar.jpg' };

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Avatar testID="test-avatar" />);
    expect(getByTestId('test-avatar')).toBeTruthy();
  });

  it('renders image when source is provided', () => {
    const { getByTestId } = render(
      <Avatar source={testImage} testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar).toContainElement(
      expect.objectContaining({
        type: 'Image',
        props: expect.objectContaining({
          source: testImage,
        }),
      })
    );
  });

  it('renders placeholder icon when no source is provided', () => {
    const { getByTestId } = render(<Avatar testID="test-avatar" />);
    const avatar = getByTestId('test-avatar');
    expect(avatar).toContainElement(
      expect.objectContaining({
        type: 'Icon',
        props: expect.objectContaining({
          name: 'account',
        }),
      })
    );
  });

  it('applies size styles correctly', () => {
    const { getByTestId } = render(
      <Avatar size="large" testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.style).toContainEqual(
      expect.objectContaining({
        width: 56,
        height: 56,
      })
    );
  });

  it('applies variant styles correctly', () => {
    const { getByTestId } = render(
      <Avatar variant="rounded" testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.style).toContainEqual(
      expect.objectContaining({
        borderRadius: expect.any(Number),
      })
    );
  });

  it('renders custom icon when provided', () => {
    const { getByTestId } = render(
      <Avatar icon="star" testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar).toContainElement(
      expect.objectContaining({
        type: 'Icon',
        props: expect.objectContaining({
          name: 'star',
        }),
      })
    );
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      margin: 10,
      opacity: 0.8,
    };
    const { getByTestId } = render(
      <Avatar style={customStyle} testID="test-avatar" />
    );
    const avatar = getByTestId('test-avatar');
    expect(avatar.props.style).toContainEqual(customStyle);
  });
});
