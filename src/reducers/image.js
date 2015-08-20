import {
    IMAGE_REQUEST ,
    IMAGE_SUCCESS,
    IMAGE_FAILURE
    } from '../actions/actionTypes';


const initialState = {
    loaded: false
};

export default function image(state = initialState, action = {}) {
    switch (action.type) {
        case IMAGE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.response
            };
        case IMAGE_FAILURE:
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
