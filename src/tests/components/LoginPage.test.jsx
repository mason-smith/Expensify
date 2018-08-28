import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../../components/LoginPage";

test("should render LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();

  //  expect(wrapper.find('h1').text()).toBe('Expensify');
  //  const renderer = new ReactShallowRenderer();
  //  renderer.render(<Header />);
  //  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
