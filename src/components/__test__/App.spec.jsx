import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('App', () => {
	it('should show an error message for an invalid card number', async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.type(screen.getByLabelText(/card number/i), '1234 5678 9101 1121');
		await user.keyboard('{Tab}');
		expect(screen.getByText(/credit card number is invalid/i)).toBeInTheDocument();
	});

	it('should show thank you message when all details are valid', async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.type(screen.getByLabelText(/cardholder name/i), 'Elon Musk');
		await user.type(screen.getByLabelText(/card number/i), '4111 1111 1111 1111');
		await user.type(screen.getByPlaceholderText(/mm/i), '04');
		await user.type(screen.getByPlaceholderText(/yy/i), '2029');
		await user.type(screen.getByLabelText(/cvc/i), '123');
		await user.click(screen.getByRole('button', { name: /confirm/i }));

		expect(screen.getByText(/thank you/i)).toBeInTheDocument();
	});
});
