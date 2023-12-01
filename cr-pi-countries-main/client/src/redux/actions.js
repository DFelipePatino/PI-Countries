import axios from 'axios';
import { GET_COUNTRIES } from './action-types';

export function getCountries() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            console.log(response.data);
            dispatch(
                {
                    type: GET_COUNTRIES,
                    payload: response.data
                }
            )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}