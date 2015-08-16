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
            console.log('start');
            console.log(action);
            console.log('end');
            return {
                ...state,
                loading: true
            };
        case IMAGE_SUCCESS:
            console.log(action);
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.res
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
