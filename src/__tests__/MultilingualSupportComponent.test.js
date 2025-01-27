import React from 'react';
import { render, screen } from '@testing-library/react';
import MultilingualSupportComponent from '../components/MultilingualSupportComponent';

describe('Multilingual Support Component', () => {
    test('renders multilingual support message', () => {
        const { getByText } = render(<MultilingualSupportComponent />);
        expect(getByText(/Support Multilingue/i)).toBeInTheDocument();
    });

    test('renders multilingual support component', () => {
        render(<MultilingualSupportComponent />);
        const heading = screen.getByText(/Support Multilingue/i);
        expect(heading).toBeInTheDocument();
    });
});
