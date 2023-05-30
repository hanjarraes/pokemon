// Define the initial state of the store
const initialState = {
  detail: "", 
  favorite:[]
};

// Define a reducer function to update the store
const storeGlobalReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "DATA_DETAIL":
      return { ...state, detail: action.payload };
      case "FAVORITE":
        return { ...state, favorite: action.payload };
    default:
      return state;
  }
};

export default storeGlobalReducer;
