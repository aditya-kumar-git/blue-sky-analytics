import { combineReducers } from "redux";

let storeCountries = (initialState = [], action) => {
	switch (action.type) {
		case "STORE_COUNTRIES": {
			return [...initialState,action.payload]
		}
		default: {
			return initialState
		}
	}
}


let allReducers = combineReducers({
    storeCountries
});
export default allReducers