import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import './phone-slider.css';

class PhoneSpecs extends Component {
	render() {
		const images = this.props.images;
		let imgs = '';
		if (images.length > 0) {
			imgs = images.map((img, index) => (
				<img src={img} key={index} alt="phone-img" />
			));
		}

		return (
			<Carousel width="380px" renderCenterLeftControls={({previousSlide}) => (
				<div onClick={previousSlide} className="custom-btn btn-left"></div>
			)}
			renderCenterRightControls={({nextSlide}) => (
				<div onClick={nextSlide} className="custom-btn btn-right"></div>
			)}>
				{imgs}
			</Carousel>
		);
	}
}

export default PhoneSpecs;
