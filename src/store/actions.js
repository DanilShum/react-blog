import {ACTION_DATA_POST,ACTION_DATA_USER} from '../index'

export const updatePost = (newPost) => ({
    type: ACTION_DATA_POST,
    playload: newPost,
})

export const updateUsers = (newUsers) => ({
    type: ACTION_DATA_USER,
    playload: newUsers,
})