import * as types from '../constants/actionTypes';

const users = (state = [], action) => {
    switch (action.type) {
        case types.ADD_USER:
            return [
                ...state,
                {
                    name: action.name,
                    id: action.id
                }
            ]
        case types.USERS_LIST:
            return state.users;
        default:
            return state;
    }
}

export default users;