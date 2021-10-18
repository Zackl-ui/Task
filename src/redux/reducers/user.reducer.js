const obj = {
  data: "",
  token: "",
  auth: false,
  role: "",
  userId: "",
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
        role: action.role,
        auth: action.token ? true : false,
      };
    case "SET_ID":
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default User;
