let initialState = {
    allCountries: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_FAV":
            return {
                ...state,
                allCountries: [...state.allCountries, action.payload],
            }

        default:
            return state
    }

}

export default reducer