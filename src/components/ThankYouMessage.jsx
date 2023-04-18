function ThankYouMessage() {
	return (
		<div className="message-container">
			<img src="/images/icon-complete.svg" alt="" />
			<h2 className="message-heading">Thank You!</h2>
			<p className="message-text">We&apos;ve added your card details</p>
			<button className="btn" onClick={() => window.location.reload()}>
				Continue
			</button>
		</div>
	);
}

export default ThankYouMessage;
