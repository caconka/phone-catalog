import React, {Component} from 'react';
import './phone-specs.css';

class PhoneSpecs extends Component {
	render() {
		const phone = this.props.phone;
		let classAuth = '';
		let secureAuth = '';
		if (phone.specs.secureAuth === 'TOUCH_ID') {
			classAuth = 'spec__icon icon__touch';
			secureAuth = 'Touch id';
		} else {
			classAuth = 'spec__icon icon__face';
			secureAuth = 'Face id';
		}

		return (
			<div className="specs__global">
				<div>
					<h1 className="phone-name">{phone.name}</h1>
				</div>
				<div className="specs__container">
					<div className="specs__principal">
						<div className="spec__row">
							<div className="spec__icon icon__display"></div>
							<div className="spec__content">
								<h2>{phone.specs.display.size}</h2>
								<span>{phone.specs.display.resolution}</span>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon icon__camera"></div>
							<div className="spec__content">
								<div className="spec__value">
									<h2>{phone.specs.camera.back}</h2>
									<h4>MP</h4>
								</div>
								<span>{phone.specs.camera.front}MP</span>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon icon__ram"></div>
							<div className="spec__content">
								<div className="spec__value">
									<h2>{phone.specs.ram}</h2>
									<h4>RAM</h4>
								</div>
								<span>{phone.specs.chip}</span>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon icon__capacity"></div>
							<div className="spec__content">
								<div className="spec__value">
									<h2>{phone.specs.capacity}</h2>
									<h4>GB</h4>
								</div>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon icon__battery"></div>
							<div className="spec__content">
								<div className="spec__value">
									<h2>{phone.specs.battery}</h2>
									<h4>mAh</h4>
								</div>
							</div>
						</div>
						<div className="spec__row">
							<div className={classAuth}></div>
							<div className="spec__content">
								<div className="spec__value">
									<h3>{secureAuth}</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="specs__secondary">
						<div className="spec__row">
							<div className="spec__icon--secondary icon__os"></div>
							<div className="spec__content">
								<div className="spec__value">
									{phone.specs.os}
								</div>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon--secondary icon__dimensions"></div>
							<div className="spec__content">
								<div className="spec__value">
									{phone.specs.measures.dimensions}
								</div>
							</div>
						</div>
						<div className="spec__row">
							<div className="spec__icon--secondary icon__weight"></div>
							<div className="spec__content">
								<div className="spec__value">
									{phone.specs.measures.weight}
								</div>
							</div>
						</div>
						<div className="spec__row min-margin">
							Colors
						</div>
						<div className="spec__row min-margin">
							{phone.specs.colors.map((c, i) => {
								return (
									<div className="icon__color"
										style={{backgroundColor: '#' + c}} key={i}
									>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PhoneSpecs;
