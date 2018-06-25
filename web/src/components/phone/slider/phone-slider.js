import React, {Component} from 'react';
import Slider from 'react-slick';
import './phone-slider.css';

class PhoneSpecs extends Component {
	render() {
		const images = this.props.images;
		const imgStyle = {
			width: '100%',
			height: '100%'
		};
		let imgs = '';
		if (images.length > 0) {
			imgs = images.map((img, index) => (
				<div key={index}>
					<img src={img} alt="phone-img" style={imgStyle} />
				</div>
			));
		}
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="slider__container">
				<Slider {...settings}>
					{imgs}
				</Slider>
			</div>
		);
	}
}

export default PhoneSpecs;
