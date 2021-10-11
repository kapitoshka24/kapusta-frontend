import axios from 'axios';

import { 
    fetchMonthlySummaryRequest,
    fetchMonthlySummarySuccess,
    fetchMonthlySummaryError } from '../actions';

export const fetchMonthlySummary = () => async dispatch => {
    dispatch(fetchMonthlySummaryRequest());
    
    try {
        const response = await axios.get('https://kapusta-backend.herokuapp.com/api/currencymovements/summaryIncome?year=2021');
        dispatch(fetchMonthlySummarySuccess(response.data));
    } catch (error) {
        dispatch(fetchMonthlySummaryError(error));
    }
};


