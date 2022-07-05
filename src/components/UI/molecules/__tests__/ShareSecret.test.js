import { ShareSecret } from "../ShareSecret";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

window.React = React;

const sampleSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
};

describe("Share Secret Button", () => {
  it("should render properly", () => {
    render(<ShareSecret secret={sampleSecret} />);
    expect(document.body).toHaveTextContent("Share");
  });

  it("should render modal properly when clicked", () => {
    const { getByText } = render(<ShareSecret secret={sampleSecret} />);
    const button = getByText("Share");
    button.click();
    expect(document.body).toHaveTextContent(
      "What is the username of the person you want to share this secret with?"
    );
  });

  it("should update save button when username is entered", () => {
    const { getByText, getByRole } = render(
      <ShareSecret secret={sampleSecret} />
    );
    const button = getByText("Share");
    button.click();
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "testuser" } });
    const button2 = getByText("Share with testuser");
    expect(button2).toBeInTheDocument();
  });
});
