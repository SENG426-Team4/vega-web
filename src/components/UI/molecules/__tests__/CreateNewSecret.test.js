import React from "react";
import { render } from "@testing-library/react";
import { CreateNewSecret } from "../CreateNewSecret";
import "@testing-library/jest-dom/extend-expect";

window.React = React;

describe("Create new secret button", () => {
  it("should render properly", () => {
    render(<CreateNewSecret />);
    expect(document.body).toHaveTextContent("Create New Secret");
  });

  it("should open the modal when clicked", () => {
    const { getByText } = render(<CreateNewSecret />);
    const button = getByText("Create New Secret");
    button.click();
    expect(document.body).toHaveTextContent("Secret Title");
  });
});
