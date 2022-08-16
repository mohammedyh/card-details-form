import { useState } from 'react';

import CardForm from './components/CardForm';
import Layout from './components/Layout';

function App() {
	const [cardName, setCardName] = useState('');
	const [cardNumber, setCardNumber] = useState(0);
	const [expiryMonth, setExpiryMonth] = useState(0);
	const [expiryYear, setExpiryYear] = useState(0);
	const [cvc, setCvc] = useState(0);

	return (
		<Layout
			cardName={cardName}
			cardNumber={cardNumber}
			expiryMonth={expiryMonth}
			expiryYear={expiryYear}
			cvcNumber={cvc}
		>
			<CardForm
				updateName={setCardName}
				updateNumber={setCardNumber}
				updateExpiryMonth={setExpiryMonth}
				updateExpiryYear={setExpiryYear}
				updateCvc={setCvc}
			/>
		</Layout>
	);
}

export default App;
