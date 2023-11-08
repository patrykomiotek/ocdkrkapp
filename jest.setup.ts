// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
