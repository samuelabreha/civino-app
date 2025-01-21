import React from 'react';
import { render } from '@testing-library/react-native';
import Badge from '../Badge';

describe('Badge', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Badge content="Test Badge" />);
    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('applies color styles correctly', () => {
    const { getByTestId } = render(
      <Badge content="Test" color="primary" testID="test-badge" />
    );
    const badge = getByTestId('test-badge');
    expect(badge.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: expect.any(String),
      })
    );
  });

  it('applies size styles correctly', () => {
    const { getByTestId } = render(
      <Badge content="Test" size="small" testID="test-badge" />
    );
    const badge = getByTestId('test-badge');
    expect(badge.props.style).toContainEqual(
      expect.objectContaining({
        paddingVertical: expect.any(Number),
        paddingHorizontal: expect.any(Number),
        borderRadius: expect.any(Number),
      })
    );
  });

  it('applies variant styles correctly', () => {
    const { getByTestId } = render(
      <Badge content="Test" variant="outlined" testID="test-badge" />
    );
    const badge = getByTestId('test-badge');
    const styles = badge.props.style.flat();
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expect.any(String),
        }),
      ])
    );
  });

  it('renders correct text variant based on size', () => {
    const { getByText } = render(<Badge content="Test" size="small" />);
    const textElement = getByText('Test');
    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({
        fontSize: expect.any(Number),
      })
    );
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      margin: 10,
      opacity: 0.8,
    };
    const { getByTestId } = render(
      <Badge content="Test" style={customStyle} testID="test-badge" />
    );
    const badge = getByTestId('test-badge');
    expect(badge.props.style).toContainEqual(customStyle);
  });
});
