import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("should display error if secret value is empty", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const { getByText, getByPlaceholderText } = render(<CreateNewSecret />);
    const button = getByText("Create New Secret");
    button.click();
    const secretNameInput = getByPlaceholderText("Enter secret title");
    fireEvent.change(secretNameInput, { target: { value: "This is a name" } });
    const button2 = getByText("Save Changes");
    button2.click();
    expect(window.alert).toBeCalledWith(
      "Enter both a secret name and its value!"
    );
  });

  it("should display error if secret name is empty", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const { getByText, getByPlaceholderText } = render(<CreateNewSecret />);
    const button = getByText("Create New Secret");
    button.click();
    const secretValueInput = getByPlaceholderText("Enter secret");
    fireEvent.change(secretValueInput, {
      target: { value: "This is a value" },
    });
    const button2 = getByText("Save Changes");
    button2.click();
    expect(window.alert).toBeCalledWith(
      "Enter both a secret name and its value!"
    );
  });
});
