import React, {Component} from 'react';
import './phone-card.css';

class PhoneCard extends Component {
	render() {
		return (
			<div className="card__container">
				<div className="card__image">
					<img src={this.props.phone.baseImg} alt={this.props.phone.name} />
				</div>
				<div className="card__title">
					<span>{this.props.phone.name}</span>
				</div>
			</div>
		);
	}
}

export default PhoneCard;
