import axios from 'axios';

const PORT = '8080';
const BASE_URL = 'http://localhost:' + PORT;

export const getPhones = () => {
	return axios.get(`${BASE_URL}/phones`).then(phones => phones.data);
};

export const getPhoneById = id => {
	return axios.get(`${BASE_URL}/phones/${id}`).then(phone => phone.data);
};
