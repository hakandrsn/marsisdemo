import { types } from '../actions/types';
import { omit } from "lodash"
const {ADD_ITEM, DELETE_ITEM} = types;

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_ITEM:
            return omit(state, action.payload);
        default:
            return state
    }
}