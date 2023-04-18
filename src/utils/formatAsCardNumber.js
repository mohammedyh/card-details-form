export const formatAsCardNumber = cardNumber => {
	return (
		cardNumber.length &&
		cardNumber
			.replace(/\D/g, '')
			.match(/.{1,4}/g)
			.join(' ')
	);
};
