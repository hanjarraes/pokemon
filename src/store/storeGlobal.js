// Define the initial state of the store
const initialState = {
  sidebarShow: "responsive",
};

// Define a reducer function to update the store
const storeGlobalReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "DATA":
      return { ...state, sidebarShow: action.type };
    default:
      return state;
  }
};

export default storeGlobalReducer;
