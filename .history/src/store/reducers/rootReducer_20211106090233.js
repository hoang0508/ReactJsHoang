const initState = {
  users: [
    {
      id: 1,
      name: "hoang",
    },
    {
      id: 2,
      name: "huy",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
