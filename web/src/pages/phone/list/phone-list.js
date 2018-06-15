import React, {Component} from 'react';
import PhoneCard from '../../../components/phone/card/phone-card';
import './phone-list.css';

class PhoneList extends Component {
	render() {
		return (
			<div className="list__page">
				<div className="list__container">
					<PhoneCard />
					<PhoneCard />
					<PhoneCard />
				</div>
			</div>
		);
	}
}

export default PhoneList;
