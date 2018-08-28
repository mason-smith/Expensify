import { login, logout } from "../../actions/auth.jsx";

test("should generate login action object", () => {
  const uid = "abc1123";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
