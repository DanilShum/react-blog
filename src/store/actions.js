import {ACTION_DATA_POST,ACTION_DATA_USER,ACTION_DATA_COMMENT} from '../index'

export const updatePost = (newPost) => ({
    type: ACTION_DATA_POST,
    playload: newPost,
})

export const updateUsers = (newUsers) => ({
    type: ACTION_DATA_USER,
    playload: newUsers,
})

export const updateComments = (newComments) => ({
    type: ACTION_DATA_COMMENT,
    playload: newComments,
})