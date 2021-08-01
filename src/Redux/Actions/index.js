import axios from "axios"

export var getSpecificCountry = (country, imageLink) => {
	return async (dispatch) => {
		var output = await axios({
			url: `https://covid19.mathdro.id/api/countries/${country}`,
		})

		let amount = output.data.confirmed.value
		dispatch({
			type: "STORE_COUNTRIES",
			payload: { country: country, data: amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), imageSrc: imageLink },
		})
	}
}