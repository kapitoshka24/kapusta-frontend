import axios from 'axios';

import { 
    fetchMonthlySummaryRequest,
    fetchMonthlySummarySuccess,
    fetchMonthlySummaryError } from '../actions';

    axios.defaults.baseURL = 'https://kapusta-backend.herokuapp.com/api';

export const fetchMonthlySummary = () => async dispatch => {
    dispatch(fetchMonthlySummaryRequest());
    
    try {
        const response = await axios.get('/currencymovements/summaryIncome?year=2021');
        dispatch(fetchMonthlySummarySuccess(response.data.result));
    } catch (error) {
        dispatch(fetchMonthlySummaryError(error));
    }
};


