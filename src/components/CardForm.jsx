import valid from 'card-validator';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import ThankYouMessage from './ThankYouMessage';

function CardForm(props) {
	const schema = Yup.object({
		cardName: Yup.string().required('Cardholder name cannot be blank'),
		cardNumber: Yup.string()
			.test(
				'1',
				'Credit Card number is invalid',
				value => valid.number(value).isValid
			)
			.required(),
		expiryMonth: Yup.string().test(
			2,
			'Invalid month',
			value => valid.expirationMonth(value).isValid
		),
		expiryYear: Yup.string().test(
			3,
			'Invalid year',
			value => valid.expirationYear(value).isValid
		),
		cvcNumber: Yup.string().test(
			4,
			'Invalid CVC',
			value => valid.cvv(value).isValid
		),
	});

	const [submitted, setSubmitted] = useState(false);

	return (
		<Formik
			initialValues={{
				cardName: '',
				cardNumber: '',
				expiryMonth: '',
				expiryYear: '',
				cvcNumber: '',
			}}
			on
			validationSchema={schema}
			onSubmit={() => setSubmitted(true)}
		>
			{!submitted ? (
				<Form>
					<label htmlFor="card-name">Cardholder Name</label>
					<Field
						className="w-full"
						id="card-name"
						name="cardName"
						placeholder="e.g. Jane Appleseed"
						onKeyUp={e => props.updateName(e.target.value)}
					/>
					<div className="form-error">
						<ErrorMessage name="cardName" />
					</div>

					<label htmlFor="card-number">Card Number</label>
					<Field
						className="w-full"
						id="card-number"
						name="cardNumber"
						placeholder="e.g. 1234 5678 9123 0000"
						onKeyUp={e => props.updateNumber(e.target.value)}
					/>
					<div className="form-error">
						<ErrorMessage name="cardNumber" />
					</div>

					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div>
							<label htmlFor="expiry-date">Exp. Date (MM/YY)</label>
							<div
								style={{ display: 'flex', gap: '10px', marginRight: '20px' }}
							>
								<div>
									<Field
										className="w-full"
										name="expiryMonth"
										placeholder="MM"
										onKeyUp={e => props.updateExpiryMonth(e.target.value)}
									/>
									<div className="form-error">
										<ErrorMessage name="expiryMonth" />
									</div>
								</div>

								<div>
									<Field
										className="w-full"
										name="expiryYear"
										placeholder="YY"
										onKeyUp={e => props.updateExpiryYear(e.target.value)}
									/>
									<div className="form-error">
										<ErrorMessage name="expiryYear" />
									</div>
								</div>
							</div>
						</div>

						<div>
							<label htmlFor="cvc-number">CVC</label>
							<div>
								<Field
									id="cvc-number"
									name="cvcNumber"
									placeholder="e.g. 789"
									onKeyUp={e => props.updateCvc(e.target.value)}
								/>
								<div className="form-error">
									<ErrorMessage name="cvcNumber" />
								</div>
							</div>
						</div>
					</div>

					<button className="btn" type="submit">
						Confirm
					</button>
				</Form>
			) : (
				<ThankYouMessage />
			)}
		</Formik>
	);
}

export default CardForm;
