const obj = {
  data: [],
  user: {},
  totalPage:'',
  page: 1,
};
const GetUser = (state = obj, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        data: action.payload,
        totalPage: action.pages,
      };
    case "EDIT_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default GetUser;
