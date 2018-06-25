const phones = [
	{
		id: '1',
		name: 'Nokia 8 Sirocco',
		baseImg: 'https://dl.dropboxusercontent.com/s/ho2snhbs2ci4bmr/nokia8-01.png?dl=0',
		brand: 'Nokia',
		specs: {
			os: 'Android 8.1',
			display: {
				size: '5.3"',
				resolution: '1440x2560 pixels'
			},
			chip: 'Snapdragon 835',
			ram: '6',
			camera: {
				front: '13',
				back: '13'
			},
			capacity: '128',
			measures: {
				dimensions: '151.5 x 73.7 x 7.9 mm',
				weight: '160g'
			},
			battery: '3090',
			secureAuth: 'FACE_ID',
			colors: ['000000', 'CCCCCC']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/8_1858_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/8_1859_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/8_1860_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/8_1861_Big_Imagen.png'
		]
	},
	{
		id: '2',
		name: 'Iphone X',
		baseImg: 'https://dl.dropboxusercontent.com/s/1ci1mlbiwjbqsz9/iphoneX-01.png?dl=0',
		brand: 'Apple',
		specs: {
			os: 'iOS 11',
			display: {
				size: '5.8"',
				resolution: '1125x2436 pixels'
			},
			chip: 'A11 Bionic chip',
			ram: '3',
			camera: {
				front: '7',
				back: '12'
			},
			capacity: '64 - 256',
			measures: {
				dimensions: '143.6 x 70.9 x 7.7 mm',
				weight: '174g'
			},
			battery: '2716',
			secureAuth: 'FACE_ID',
			colors: ['E2E3E4', '262529']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/iphone-x-256gb_1778_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/iphone-x-256gb_1779_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/iphone-x-256gb_1780_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/iphone-x-256gb_1781_Big_Imagen.png'
		]
	},
	{
		id: '3',
		name: 'Huawei P20',
		baseImg: 'https://dl.dropboxusercontent.com/s/03m3uvu10n3fqpg/huaweiP20-01.png?dl=0',
		brand: 'Huawei',
		specs: {
			os: 'Android 8.1',
			display: {
				size: '6.1"',
				resolution: '1080x2240 pixels'
			},
			chip: 'Hisilicon Kirin 970',
			ram: '6',
			camera: {
				front: '24',
				back: '40'
			},
			capacity: '128',
			measures: {
				dimensions: '155 x 73.9 x 7.8 mm',
				weight: '180g'
			},
			battery: '4000',
			secureAuth: 'TOUCH_ID',
			colors: ['E5D1B6', '000000', '295094', '57598C', 'FDD3CB']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/p20-pro_1955_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/p20-pro_1948_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/p20-pro_1945_Big_Imagen.png'
		]
	},
	{
		id: '4',
		name: 'Xperia XZ2',
		baseImg: 'https://dl.dropboxusercontent.com/s/blhw4r5hhlinyse/xperiaXZ2.png?dl=0',
		brand: 'Sony',
		specs: {
			os: 'Android 8.0',
			display: {
				size: '5.7"',
				resolution: '1080x2160 pixels'
			},
			chip: 'Snapdragon 845',
			ram: '6',
			camera: {
				front: '5',
				back: '19'
			},
			capacity: '64',
			measures: {
				dimensions: '153 x 72 x 11.1 mm',
				weight: '198g'
			},
			battery: '3180',
			secureAuth: 'TOUCH_ID',
			colors: ['A2AAAD', '33353B', '174A5B', '948794']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/xperia-xz2_1996_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/xperia-xz2_1998_Big_Imagen.png'
		]
	},
	{
		id: '5',
		name: 'Huawei Y7',
		baseImg: 'https://dl.dropboxusercontent.com/s/xgwep1tw7v3le5d/huaweiY7-01.png?dl=0',
		brand: 'Huawei',
		specs: {
			os: 'Android 7.0',
			display: {
				size: '5.5"',
				resolution: '720x1280 pixels'
			},
			chip: 'Snapdragon 435',
			ram: '2',
			camera: {
				front: '8',
				back: '12'
			},
			capacity: '16',
			measures: {
				dimensions: '153.6 x 76.4 x 8.4 mm',
				weight: '165g'
			},
			battery: '4000',
			secureAuth: 'TOUCH_ID',
			colors: ['E9DDB7', 'CCCCCC', 'E8E8E8']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/y7-2018_1889_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/y7-2018_1890_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/y7-2018_1892_Big_Imagen.png'
		]
	},
	{
		id: '6',
		name: 'LG Q6',
		baseImg: 'https://dl.dropboxusercontent.com/s/er96j5xvlv4p7wk/lgQ6-01.png?dl=0',
		brand: 'LG',
		specs: {
			os: 'Android 7.1',
			display: {
				size: '5.5"',
				resolution: '1080x2160 pixels'
			},
			chip: 'Snapdragon 435',
			ram: '4',
			camera: {
				front: '5',
				back: '13'
			},
			capacity: '64',
			measures: {
				dimensions: '142.5 x 69.3 x 8.1 mm',
				weight: '149g'
			},
			battery: '3000',
			secureAuth: 'FACE_ID',
			colors: ['000000', 'CCCCCC']
		},
		images: [
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/q6_1663_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/q6_1666_Big_Imagen.png',
			'http://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/q6_1665_Big_Imagen.png'
		]
	}
];

module.exports = phones;
