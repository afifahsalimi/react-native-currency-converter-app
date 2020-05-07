export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT'
export const SWAP_CURRENCY = 'SWAP_CURRENCY'
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY'
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY'
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION'

export const CONVERSION_RESULT = 'CONVERSION_RESULT'
export const CONVERSION_ERROR = 'CONVERSION_ERROR'

import api from '@services/httpServices'

export const fetchLatestConversionRates = (data) => {
    console.log('GET CONVERSION RATES')
    return async (dispatch, getState) => {
        try {
            let currency = data
            if (currency == undefined) {
                currency = getState().currency.baseCurrency
            }
            const response = await api.getLatestConversionRates(currency)
            const result = response.data
            if (result.error) {
                dispatch({
                    type: CONVERSION_ERROR,
                    error: result.error
                })
            }
            else {
                dispatch({
                    type: CONVERSION_RESULT,
                    result
                })
            }
        } catch (error) {
            dispatch({
                type: CONVERSION_ERROR,
                error: error.message
            })
        }
    }
}

export const getInitialConversion = () => ({
    type: GET_INITIAL_CONVERSION,
})

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
})

export const changeBaseCurrency = currency => ({
    type: CHANGE_BASE_CURRENCY,
    currency,
})

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
})

export const changeQuoteCurrency = currency => ({
    type: CHANGE_QUOTE_CURRENCY,
    currency,
})