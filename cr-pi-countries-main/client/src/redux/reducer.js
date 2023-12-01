import { GET_COUNTRIES } from "./action-types"

let initialState = {
    allCountries: []
}

const reducer = (state = initialState, action) => {
    const ITEMS_PER_PAGE = 10;
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: [...action.payload].splice(0, ITEMS_PER_PAGE),
                countriesBackUp: action.payload
            };

        default:
            return state
    }

}

export default reducer