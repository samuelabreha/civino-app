import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizationComponent from '../components/CustomizationComponent';

describe('Customization Component', () => {
    test('renders customization options', () => {
        const { getByText } = render(<CustomizationComponent />);
        expect(getByText(/Options de personnalisation/i)).toBeInTheDocument();
    });

    test('renders customization component', () => {
        render(<CustomizationComponent />);
        const heading = screen.getByText(/Personnalisation de l'interface/i);
        expect(heading).toBeInTheDocument();
    });

    test('renders customization component with default props', () => {
        const { getByText } = render(<CustomizationComponent />);
        expect(getByText(/Personnalisation de l'interface/i)).toBeInTheDocument();
        expect(getByText(/Options de personnalisation/i)).toBeInTheDocument();
    });

    test('renders customization component with custom props', () => {
        const props = {
            title: 'Mon titre personnalisé',
            options: ['Option 1', 'Option 2', 'Option 3']
        };
        const { getByText } = render(<CustomizationComponent {...props} />);
        expect(getByText(props.title)).toBeInTheDocument();
        props.options.forEach(option => {
            expect(getByText(option)).toBeInTheDocument();
        });
    });
});
