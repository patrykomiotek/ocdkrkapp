import type { Meta } from "@storybook/react";

import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

const meta = {
  title: "Components/Auth/AuthCredentials",
  component: AuthCredentials,
  // tags: ["autodocs"],
} satisfies Meta<typeof AuthCredentials>;

export default meta;

export const _AuthCredentials = () => (
  <AuthProvider>
    <AuthCredentials />
  </AuthProvider>
);
