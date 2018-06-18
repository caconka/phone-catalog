import React, {Component} from 'react';
import './phone-card.css';

class PhoneCard extends Component {
	render() {
		const props = this.props;
		const cardImageClass = 'card__image card--' + props.color;
		return (
			<div className="card__container" onClick={props.click}>
				<div className={cardImageClass}>
					<img src={this.props.phone.baseImg} alt={props.phone.name} />
				</div>
				<div className="card__title">
					<span>{this.props.phone.name}</span>
				</div>
			</div>
		);
	}
}

export default PhoneCard;
