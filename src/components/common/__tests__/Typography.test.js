import React from 'react';
import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Typography from '../Typography';

// Mock StyleSheet.flatten
StyleSheet.flatten = jest.fn(style => style);

describe('Typography', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Typography>Test Text</Typography>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('applies variant styles correctly', () => {
    const { getByText } = render(
      <Typography variant="h1">Heading 1</Typography>
    );
    const element = getByText('Heading 1');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: expect.any(Number),
        })
      ])
    );
  });

  it('applies color correctly', () => {
    const { getByText } = render(
      <Typography color="primary">Colored Text</Typography>
    );
    const element = getByText('Colored Text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: expect.any(String),
        })
      ])
    );
  });

  it('applies font weight correctly', () => {
    const { getByText } = render(
      <Typography weight="bold">Bold Text</Typography>
    );
    const element = getByText('Bold Text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontWeight: '700',
        })
      ])
    );
  });

  it('applies text alignment correctly', () => {
    const { getByText } = render(
      <Typography align="center">Centered Text</Typography>
    );
    const element = getByText('Centered Text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textAlign: 'center',
        })
      ])
    );
  });

  it('merges custom styles correctly', () => {
    const customStyle = {
      marginTop: 10,
      paddingHorizontal: 20,
    };
    const { getByText } = render(
      <Typography style={customStyle}>Styled Text</Typography>
    );
    const element = getByText('Styled Text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining(customStyle)
      ])
    );
  });
});
