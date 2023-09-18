import { screen, render } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    // render(<MuiMode/>, {
    //     wrapper: AppProviders
    // })
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
