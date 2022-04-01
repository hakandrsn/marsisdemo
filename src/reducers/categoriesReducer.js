import { types } from "../actions/types";
import { mapKeys } from "lodash";
const { FETCHS_CATEGORY, FETCH_CAGETORY } = types;


export default (state = {}, action) => {
  switch (action.type) {
    case FETCHS_CATEGORY:
      return { ...state, ...mapKeys(action.payload, "id") };
    case FETCH_CAGETORY:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state
  }
}