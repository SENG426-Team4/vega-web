import { SecretGeneration } from "../SecretGeneration";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

window.React = React;

const sampleUser = {
  role: "ROLE_USER",
};

describe("Secret Generation", () => {
  it("should render properly", () => {
    const { getByRole } = render(<SecretGeneration user={sampleUser} />);
    const input = getByRole("textbox");
    expect(document.body).toHaveTextContent("Secret Generation");
    expect(input).toBeInTheDocument();
  });

  it("should display two different random strings on clicks", () => {
    const { getByText, getByRole } = render(
      <SecretGeneration user={sampleUser} />
    );
    const button = getByText("Generate Secret");
    const input = getByRole("textbox");
    button.click();
    const input1 = input.value;
    button.click();
    const input2 = input.value;
    expect(input1).toHaveLength(20);
    expect(input2).toHaveLength(20);
    expect(input1).not.toEqual(input2);
  });

  it("should generate different length secrets depending on the input", () => {
    const { getByText, getByRole } = render(
      <SecretGeneration user={sampleUser} />
    );
    const button = getByText("Generate Secret");
    const lengthInput = getByRole("spinbutton");
    const input = getByRole("textbox");

    fireEvent.change(lengthInput, { target: { value: "10" } });
    button.click();
    const input1 = input.value;
    expect(input1).toHaveLength(10);

    fireEvent.change(lengthInput, { target: { value: "25" } });
    button.click();
    const input2 = input.value;
    expect(input2).toHaveLength(25);
  });

  it("should not generate a new secret if length is less than 1", () => {
    const { getByText, getByRole } = render(
      <SecretGeneration user={sampleUser} />
    );
    const button = getByText("Generate Secret");
    const lengthInput = getByRole("spinbutton");
    const input = getByRole("textbox");

    fireEvent.change(lengthInput, { target: { value: "-10" } });
    button.click();
    expect(input.value).toHaveLength(0);
  });
});
