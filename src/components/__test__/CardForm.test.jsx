import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardForm from '../CardForm';

describe('CardForm', () => {
	it('renders correctly', async () => {
		render(<CardForm />);
		expect(screen.getByLabelText(/cardholder name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
		expect(screen.getByText(/confirm/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});
