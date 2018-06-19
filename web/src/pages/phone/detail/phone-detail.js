import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getSelectedPhone} from '../../../actions/phones';
import PhoneSpecs from '../../../components/phone/specs/phone-specs';
import './phone-detail.css';

class PhoneDetail extends Component {
	componentDidMount() {
		this.props.getPhone(this.props.match.params.id);
	}

	render() {
		let phoneSpecs = (<p>Loading...</p>);
		const {selectedPhone} = this.props;
		if (selectedPhone) {
			phoneSpecs = (<PhoneSpecs phone={selectedPhone} />);
		}
		return (
			<div className="page__container">
				<div className="detail__container">
					<div className="anchor__back">
						<Link to="/">Back to List</Link>
					</div>
					{phoneSpecs}
				</div>
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
