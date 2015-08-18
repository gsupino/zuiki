import {
    USER_REQUEST ,
    USER_SUCCESS,
    USER_FAILURE
    } from '../actions/actionTypes';



const initialState = {
    loaded: false
};

export default function image(state = initialState, action = {}) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.response
            };
        case USER_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        default:
            return state;
    }
}
