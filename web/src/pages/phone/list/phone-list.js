import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PhoneCard from '../../../components/phone/card/phone-card';
import {getPhones} from '../../../actions/phones';
import './phone-list.css';

class PhoneList extends Component {
	componentDidMount() {
		this.props.getPhones();
	}

	render() {
		const products = this.props.phones.map(phone => {
			return <PhoneCard key={phone.id} phone={phone}/>;
		});

		return (
			<div className="list__page">
				<div className="list__container">
					{products}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		phones: state.phones
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhones() {
			dispatch(getPhones());
		}
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(PhoneList));
