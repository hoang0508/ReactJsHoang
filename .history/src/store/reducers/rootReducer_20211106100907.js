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
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      // code block
      console.log(">>> run into delete user:", action);

      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    case "CREATE_USER":
      // code block
      let id = Math.floor(Math.random() * 1001);
      let user = { id: id, name: `random - ${id}` };
      break;
    default:
      return state;
  }
};

export default rootReducer;
