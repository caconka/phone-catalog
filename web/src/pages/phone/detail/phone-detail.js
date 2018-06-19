import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSelectedPhone} from '../../../actions/phones';

class PhoneDetail extends Component {
	componentDidMount() {
		this.props.getPhone(this.props.match.params.id);
	}

	render() {
		return (
			<div>
				{this.props.selectedPhone.name}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedPhone: state.selectedPhone
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhone(id) {
			dispatch(getSelectedPhone(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhoneDetail);
