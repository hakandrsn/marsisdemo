import { types } from "../actions/types";
import { mapKeys } from "lodash";
const { FETCHS_PRODUCT,FETCH_PRODUCT } = types;

export default (state = {}, action) => {
    switch (action.type) {
        case FETCHS_PRODUCT:
            return { ...state, ...mapKeys(action.payload, "id") };
        // case FETCH_PRODUCT:
        //     return { ...state, [action.payload.id]: action.payload };
        default:
            return state
    }
}