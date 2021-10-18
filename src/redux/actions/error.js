export const ErrorMsg = (err) => {
  return {
    type: "Error",
    payload: err,
  };
};
export const Loading = (loading) => {
  return {
    type: "Loading",
    payload: loading,
  };
};
