import React, {Component} from 'react';
import './phone-specs.css';

class PhoneSpecs extends Component {
	render() {
		const phone = this.props.phone;
		const display = this.props.phone.specs;
		console.log(display)
		return (
			<div>
				<h2>{phone.name}</h2>
				<div className="spec__row">
					<div className="spec__icon icon__display"></div>
					<div className="spec__value">
					</div>
				</div>
			</div>
		);
	}
}

export default PhoneSpecs;
