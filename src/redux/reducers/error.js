const obj = {
  error: "",
  loading: "",
};
const Error = (state = obj, action) => {
  switch (action.type) {
    case "Error":
      return {
        ...state,
        error: action.payload,
      };
    case "Loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default Error;
