const obj = {
  data: "",
  token: "",
  auth: false,
};
const User = (state = obj, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        data: action.payload,
        token: action.token,
        auth: true,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
        auth: action.token ? true : false,
      };
    default:
      return state;
  }
};

export default User;
