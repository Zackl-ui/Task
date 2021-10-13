const obj = {
  data: [],
  user: {},
};
const GetUser = (state = obj, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        data: action.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default GetUser;
