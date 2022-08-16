function Layout({
	cardNumber,
	cardName,
	expiryMonth,
	expiryYear,
	cvcNumber,
	children,
}) {
	return (
		<div className="app-layout">
			<div className="sidebar">
				<div className="card card-front">
					<div className="card-content-wrapper">
						<h2>{cardNumber || '0000 0000 0000 0000'}</h2>
						<div className="name-expiry-content">
							<div>{cardName || 'Jane Appleseed'}</div>
							<div>
								{expiryMonth || '00'}/{expiryYear || '00'}
							</div>
						</div>
					</div>
				</div>

				<div className="card card-back">
					<div className="cvc-content">{cvcNumber || '000'}</div>
				</div>
			</div>

			<main>{children}</main>
		</div>
	);
}

export default Layout;
