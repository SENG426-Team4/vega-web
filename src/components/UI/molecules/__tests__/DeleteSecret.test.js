import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DeleteSecret } from "../DeleteSecret";

window.React = React;

const sampleSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
};

describe("Delete Secret Button", () => {
  it("should render properly", () => {
    render(<DeleteSecret smallScreen={false} secret={sampleSecret} />);
    expect(document.body).toHaveTextContent("Delete");
  });

  it("should open the modal when clicked", () => {
    const { getByText, getAllByRole } = render(
      <DeleteSecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("Delete");
    button.click();
    expect(getAllByRole("button")).toHaveLength(4);
    expect(document.body).toHaveTextContent("Delete Secret");
  });

  it("should show the secret name when clicked", () => {
    const { getByText } = render(
      <DeleteSecret smallScreen={false} secret={sampleSecret} />
    );
    const button = getByText("Delete");
    button.click();
    expect(document.body).toHaveTextContent(
      "Are you sure you want to delete My secret name from your vault?"
    );
  });
});
