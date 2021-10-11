import { createAction } from '@reduxjs/toolkit';

export const changeTotalBalance = createAction('kapusta/changeTotalBalance');

export const fetchMonthlySummaryRequest = createAction('kapusta/fetchMonthlySummaryRequest');
export const fetchMonthlySummarySuccess = createAction('kapusta/fetchMonthlySummarySuccess');
export const fetchMonthlySummaryError = createAction('kapusta/fetchMonthlySummaryError');
