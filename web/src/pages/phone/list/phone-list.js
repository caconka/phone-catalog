import React, {Component} from 'react';
import {connect} from 'react-redux';
import PhoneCard from '../../../components/phone/card/phone-card';
import {getPhones} from '../../../actions/phones';
import './phone-list.css';

class PhoneList extends Component {
	componentDidMount() {
		this.props.getPhones();
		this.colors = ['blue', 'red', 'yellow', 'green', 'purple', 'gray'];
	}

	getRandomColor() {
		if (this.colors) {
			const index = Math.floor(Math.random() * this.colors.length);
			const color = this.colors[index];
			this.colors.splice(index, 1);
			return color;
		}
	}

	selectPhone(phoneId) {
		this.props.history.push('phones/' + phoneId);
	}

	render() {
		const products = this.props.phones.map(phone => {
			return <PhoneCard key={phone.id} phone={phone}
				click={() => this.selectPhone(phone.id)}
				color={this.getRandomColor()}/>;
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhoneList);
