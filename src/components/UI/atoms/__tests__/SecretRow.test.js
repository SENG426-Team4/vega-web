/**
 * @jest-environment jsdom
 */

import SecretRow from "../SecretRow";
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

window.React = React;

const sampleSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
};

const sampleSharedSecret = {
  name: "My secret name",
  data: "My secret value",
  username: "admin",
  timeCreated: "2020-01-01T00:00:00.000Z",
  parentId: 2,
  owner: "testuser",
};

describe("Secret Row", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it("should render properly", () => {
    const { getByText } = render(<SecretRow secret={sampleSecret} />);
    expect(getByText("My secret name")).toBeInTheDocument();
    expect(getByText("December 31, 2019, 4:00:00 PM PST")).toBeInTheDocument();
  });

  it("should display all action buttons", () => {
    const { getAllByRole } = render(<SecretRow secret={sampleSecret} />);
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(4);
    expect(buttons[0]).toHaveTextContent("See");
    expect(buttons[1]).toHaveTextContent("Modify");
    expect(buttons[2]).toHaveTextContent("Delete");
    expect(buttons[3]).toHaveTextContent("Share");
  });

  it("should only display See button when secret was shared", () => {
    const { getAllByRole } = render(<SecretRow secret={sampleSharedSecret} />);
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("See");
  });

  it("should display who secret was shared by", () => {
    const { getByText } = render(<SecretRow secret={sampleSharedSecret} />);
    expect(getByText("Shared with you by testuser")).toBeInTheDocument();
  });
});
