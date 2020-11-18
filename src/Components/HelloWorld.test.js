import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import HelloWorld from "./HelloWorld";
import HomePage from "./HomePage";

// We will describe a block of tests
describe("Hello world component", () => {
  // we will write one individual test
  it("should render as expected", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<HomePage  />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains("BLACK LIVES MATTER")).toBe(true);
  });
});
