import type { Meta, StoryObj } from "@storybook/react";

import { RegistrationFormRefsCustomInput } from "./RegistrationFormRefsCustomInput";

const meta = {
  title: "Components/RegistrationFormRefsCustomInput",
  component: RegistrationFormRefsCustomInput,
  // tags: ["autodocs"],
} satisfies Meta<typeof RegistrationFormRefsCustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
