import React from "react";
import { SeeSecret } from "../SeeSecret";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

window.React = React;

const sampleSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
};

describe("See Secret Button", () => {
  it("should render properly", () => {
    render(<SeeSecret smallScreen={false} secret={sampleSecret} />);
    expect(document.body).toHaveTextContent("See");
  });

  it("should open the modal when clicked", () => {
    const { getByText } = render(
      <SeeSecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("See");
    button.click();
    expect(document.body).toHaveTextContent("View Secret");
  });

  it("should show the secret name when clicked", () => {
    const { getByText } = render(
      <SeeSecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("See");
    button.click();
    expect(document.body).toHaveTextContent("My secret name");
  });

  it("should show the secret value when clicked", () => {
    const { getByText } = render(
      <SeeSecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("See");
    button.click();
    expect(document.body).toHaveTextContent("My secret value");
  });
});
