import * as types from './action-types';

export const getPhones = () => ({type: types.GET_PHONES});

export const getSelectedPhone = id => ({type: types.GET_SELECTED_PHONE, id});

export const setPhones = phones => ({type: types.SET_PHONES, phones});

export const setSelectedPhone = selectedPhone => (
	{type: types.SET_SELECTED_PHONE, selectedPhone}
);

export const fetchFailed = error => ({type: types.FETCH_FAILED, error});
