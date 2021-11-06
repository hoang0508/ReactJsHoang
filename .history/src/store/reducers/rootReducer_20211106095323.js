import { act } from "react-dom/test-utils";

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
  switch (action.type) {
    case "DELETE_USER":
      // code block
      console.log(">>> run into delete user:", action);

      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return state;
      break;
    // case y:
    //   // code block
    //   break;
    default:
      return state;
  }
};

export default rootReducer;
