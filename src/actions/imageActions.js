import {
    IMAGE_REQUEST ,
    IMAGE_SUCCESS,
    IMAGE_FAILURE
    } from './actionTypes';


export function load_Old() {
    return {
        types: [IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE],
        urlPoint: '/api/images',
        fetchParams: {}
    };
}

export function load() {
    return {
        CALL_API: {
            types: [IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE],
            endpoint: '/api/users',
            params: {},
            payload: {}//,
            // Check the cache (optional):
            //shouldCallAPI: (state) => !state.image[userId],
        }
    };
}