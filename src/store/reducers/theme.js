import { CHANGE_PRIMARY_COLOR } from '@actions/theme';

const initialState = {
    color: {
        primary: '#4161FF',
        accent: '#F5F9FF',
        background: require('@assets/full-background-1.jpg')
    }
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
};