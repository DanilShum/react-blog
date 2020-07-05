import {ACTION_DATA_POST,ACTION_DATA_USER,ACTION_DATA_COMMENT} from '../index'

const initalState = {
    dataPost: '',
    dataUser: '',
    dataComment: ''
};

export const rootReducer = (state = initalState,action) => {
    switch (action.type) {
        case ACTION_DATA_POST:
            return {...state, dataPost: action.playload};
    }
    switch (action.type) {
        case ACTION_DATA_USER:
            return {...state, dataUser: action.playload};
    }

    switch (action.type) {
        case ACTION_DATA_COMMENT:
            return {...state, dataComment: action.playload};
    }

    return state
}