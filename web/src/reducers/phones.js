import {
	SET_PHONES,
	SET_SELECTED_PHONE,
	FETCH_FAILED
} from '../actions/action-types';

const initialState = {
	phones: [],
	selectedPhone: {},
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PHONES:
			return {
				...state,
				phones: action.phones
			};

		case SET_SELECTED_PHONE:
			return {
				...state,
				selectedPhone: action.selectedPhone
			};

		case FETCH_FAILED:
			return {
				...state,
				error: action.error
			};

		default: return state;
	}
};

export default reducer;
