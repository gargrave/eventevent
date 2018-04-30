export const reducerContainer = (defaultState, actions) =>
  (state = defaultState, action) => {
    if (action.type in actions) {
      return actions[action.type](state, action);
    }
    return state;
  };
