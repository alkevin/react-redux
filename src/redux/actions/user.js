import * as types from '../constants/actionTypes';

export const addUser = (username) => ({
    type: types.ADD_USER,
    username,
})

export const addUserMessage = (message) => ({
    type: types.ADD_USER_MESSAGE,
    message,
})
