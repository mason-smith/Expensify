import authReducer from "../../reducers/auth.jsx";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc1123"
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
