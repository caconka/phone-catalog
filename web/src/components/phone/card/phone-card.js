import React, {Component} from 'react';
import './phone-card.css';

class PhoneCard extends Component {
	render() {
		return (
			<div className="card__container">
				<div className="card__image">
					<img src="http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/8_1862_Big_Imagen.png" alt="" />
				</div>
				<div className="card__title">
					<span>Samsung Galaxy S9</span>
				</div>
			</div>
		);
	}
}

export default PhoneCard;
