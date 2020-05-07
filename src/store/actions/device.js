const NAMESPACE = 'device'

export const SET_KEYBOARD = `${NAMESPACE}/SET_KEYBOARD`

export const setKeyboard = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_KEYBOARD,
            data
        })
    }
}