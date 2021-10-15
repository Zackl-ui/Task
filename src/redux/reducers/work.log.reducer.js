const obj = {
  data: [],
  logChange: {},
};
const WorkData = (state = obj, action) => {
  switch (action.type) {
    case "GET_LOGS":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_LOGS":
      return {
        ...state,
        logChange: action.payload,
      };
    default:
      return state;
  }
};

export default WorkData;
