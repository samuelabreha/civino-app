import React from 'react';
import { render, screen } from '@testing-library/react';
import CollaborationComponent from '../components/CollaborationComponent';

describe('Collaboration Component', () => {
    test('renders collaboration features', () => {
        const { getByText } = render(<CollaborationComponent />);
        expect(getByText(/Outils de collaboration/i)).toBeInTheDocument();
    });

    test('renders collaboration component', () => {
        render(<CollaborationComponent />);
        const heading = screen.getByText(/Collaboration en cours/i);
        expect(heading).toBeInTheDocument();
    });
});
