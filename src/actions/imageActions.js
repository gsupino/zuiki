import {
    IMAGE_REQUEST ,
    IMAGE_SUCCESS,
    IMAGE_FAILURE
    } from './actionTypes';

export function load() {
    return {
        CALL_API: {
            types: [IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE],
            endpoint: '/api/images',
            params: {}
            // Check the cache (optional):
            //shouldCallAPI: (state) => !state.image[userId],
        }
    };
}

export function loadImages(){
    return (dispatch,getState)=>{
        return dispatch(load());
    }
}