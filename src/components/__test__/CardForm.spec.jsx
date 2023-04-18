import matchers from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from '../CardForm';

expect.extend(matchers);

beforeEach(() => {
	render(<CardForm />);
});

describe('CardForm', () => {
	it('renders correctly', async () => {
		expect(screen.getByLabelText(/cardholder name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/mm/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/yy/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
		expect(screen.getByRole('button'), {
			name: /confirm/i,
		}).toBeInTheDocument();
	});

	it('should not be able to submit form until all details are provided', async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole('button', { name: /confirm/i }));
		expect(
			screen.getByText(/cardholder name cannot be blank/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/credit card number is invalid/i)
		).toBeInTheDocument();
		expect(screen.getByText(/invalid month/i)).toBeInTheDocument();
		expect(screen.getByText(/invalid year/i)).toBeInTheDocument();
		expect(screen.getByText(/invalid cvc/i)).toBeInTheDocument();
	});
});
