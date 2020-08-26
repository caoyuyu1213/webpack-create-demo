import { ADD, CUT, GETTABLEDATA } from "./actionType";
import initState from "./defaultState";

const reducer = (state = initState, action) => {
  const { count, number } = state;
  switch (action["type"]) {
    case ADD:
      return { ...state, count: count + 5 };
    case CUT:
      return { ...state, number: number - 3 };
    case GETTABLEDATA:
      return { ...state, data: action["table"] };
    default:
      return state;
  }
};

export default reducer;
