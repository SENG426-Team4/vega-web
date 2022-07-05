import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ModifySecret } from "../ModifySecret";

window.React = React;

const sampleSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
};

describe("Modify Secret Button", () => {
  it("should render properly", () => {
    render(<ModifySecret smallScreen={false} secret={sampleSecret} />);
    expect(document.body).toHaveTextContent("Modify");
  });

  it("should open the modal when clicked", () => {
    const { getByText, getByPlaceholderText } = render(
      <ModifySecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("Modify");
    button.click();
    const inputName = getByPlaceholderText("Enter secret title");
    const inputValue = getByPlaceholderText("Enter secret");
    expect(document.body).toHaveTextContent("Modify Secret");
    expect(inputName).toHaveValue("My secret name");
    expect(inputValue).toHaveValue("My secret value");
  });

  it("should display error if secret value is empty", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const { getByText, getByDisplayValue } = render(
      <ModifySecret secret={sampleSecret} />
    );
    const button = getByText("Modify");
    button.click();
    const secretValueInput = getByDisplayValue("My secret value");
    fireEvent.change(secretValueInput, { target: { value: "" } });
    const button2 = getByText("Save");
    button2.click();
    expect(window.alert).toBeCalledWith(
      "Enter both a secret name and its value!"
    );
  });

  it("should display error if secret name is empty", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const { getByText, getByDisplayValue } = render(
      <ModifySecret secret={sampleSecret} />
    );
    const button = getByText("Modify");
    button.click();
    const secretNameInput = getByDisplayValue("My secret name");
    fireEvent.change(secretNameInput, {
      target: { value: "" },
    });
    const button2 = getByText("Save");
    button2.click();
    expect(window.alert).toBeCalledWith(
      "Enter both a secret name and its value!"
    );
  });
});
