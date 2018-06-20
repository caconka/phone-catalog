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
			<Carousel width="45%">
				{imgs}
			</Carousel>
		);
	}
}

export default PhoneSpecs;
