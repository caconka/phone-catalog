import React, {Component} from 'react';
import './phone-card.css';

class PhoneCard extends Component {
	render() {
		return (
			<div className="card__container">
				<div className="card__image">
					<img src="https://dl.dropboxusercontent.com/s/blhw4r5hhlinyse/xperiaXZ2.png?dl=0" alt="" />
				</div>
				<div className="card__title">
					<span>Samsung Galaxy S9</span>
				</div>
			</div>
		);
	}
}

export default PhoneCard;
