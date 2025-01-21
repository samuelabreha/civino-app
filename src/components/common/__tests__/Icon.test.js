import React from 'react';
import { render } from '@testing-library/react-native';
import Icon from '../Icon';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return function MockMaterialCommunityIcons(props) {
    return React.createElement('MaterialCommunityIcons', props);
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
      <Icon name="home" color="primary.main" testID="test-icon" />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.color).toBe(expect.any(String));
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      margin: 10,
      opacity: 0.8,
    };
    const { getByTestId } = render(
      <Icon
        name="home"
        style={customStyle}
        testID="test-icon"
      />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.style).toEqual(customStyle);
  });

  it('passes through additional props correctly', () => {
    const { getByTestId } = render(
      <Icon
        name="home"
        testID="test-icon"
        accessible={true}
        accessibilityLabel="Home icon"
      />
    );
    const icon = getByTestId('test-icon');
    expect(icon.props.accessible).toBe(true);
    expect(icon.props.accessibilityLabel).toBe('Home icon');
  });
});
