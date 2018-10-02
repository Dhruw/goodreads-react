import React from 'react';

const Welcome = () => {

	const welcomeStyle = {
		fontSize: '5rem',
		color: '#ccc'
	};
	return (
		<div className="text-center">
			<p style={welcomeStyle}>
				Welcome
			</p>
			<p>
				<big>
					Use above search box for searching your favorite book
				</big>
			</p>
		</div>
	);
}

export default Welcome;