import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getSelectedPhone} from '../../../actions/phones';
import PhoneSpecs from '../../../components/phone/specs/phone-specs';
import PhoneSlider from '../../../components/phone/slider/phone-slider';
import './phone-detail.css';

class PhoneDetail extends Component {
	componentDidMount() {
		this.props.getPhone(this.props.match.params.id);
	}

	backToList() {
		this.props.history.push('/');
	}

	render() {
		const {selectedPhone} = this.props;
		let phoneSpecs = (<p>Loading...</p>);
		let phoneImages = '';
		if (selectedPhone) {
			phoneSpecs = (<PhoneSpecs phone={selectedPhone} />);
			phoneImages = selectedPhone.images;
		}
		return (
			<div className="page__container">
				<div className="anchor__back" onClick={() => this.backToList()}>
					<div className="back-icon"></div>
					<Link to="/">Back to List</Link>
				</div>
				<div className="page__detail">
					<div className="detail__container">
						<PhoneSlider images={phoneImages} />
						{phoneSpecs}
					</div>
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
