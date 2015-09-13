import {
    USER_REQUEST ,
    USER_SUCCESS,
    USER_FAILURE
    } from '../actions/actionTypes';


export function load() {
    return {
        CALL_API: {
            types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
            endpoint: '/api/users',
            params: {}
            // Check the cache (optional):
            //shouldCallAPI: (state) => !state.image[userId],
        }
    };
}

export function loadUsers(){
    return (dispatch,getState)=>{
        return dispatch(load());
    }
}