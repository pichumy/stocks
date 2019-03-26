import { SWITCH_MODE } from '../../actions/uiActions';
const initialState = "Charts"

const modeReducer = (state = initialState, action) => {
  switch(action.type){
    case SWITCH_MODE:
      return action.mode;
    default:
      return state;
  }
};

export default modeReducer;
