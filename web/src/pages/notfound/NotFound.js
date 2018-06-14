import React, {Component} from 'react';
import image from '../../assets/img/404.png';

class NotFound extends Component {
	render() {
		const container = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh'
		};

		return (
			<div style={container}>
				<img src={image} alt="Page Not Found" />
			</div>
		);
	}
}

export default NotFound;
