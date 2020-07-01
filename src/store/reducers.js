import {ACTION_DATA_POST,ACTION_DATA_USER} from '../index'

const initalState = {
    dataPost: '',
    dataUser: ''
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

    return state
}