import React, {Component} from 'react';
import './phone-card.css';

class PhoneCard extends Component {
	render() {
		return (
			<div className="card__container">
				<div className="card__image">
					<img src="http://res.cloudinary.com/modesto/image/upload/v1505336244/client/catalog/devices/apple/iPhoneX_Silver_Primary.png" alt="" />
				</div>
				<div className="card__title">
					<span>Samsung Galaxy S9</span>
				</div>
			</div>
		);
	}
}

export default PhoneCard;
