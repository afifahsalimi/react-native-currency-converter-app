import {
    SET_KEYBOARD,
} from '@actions/device'

const INITIAL_STATE = {
    isKeyboardAppear: false,
    keyboardHeight: 0,
}

export const deviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_KEYBOARD:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}