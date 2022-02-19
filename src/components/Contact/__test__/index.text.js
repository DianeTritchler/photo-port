import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // Baseline Test
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    });

    // Snapshot Test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
        expect(getByTestId('button').toHaveTextContent('Submit'))
    });
});