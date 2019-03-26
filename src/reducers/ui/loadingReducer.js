const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    default:
    return state;
  }
}

export default loadingReducer;
