import { memo } from "react";

type Props = {
  // children: React.ReactNode;
  children: string | string[];
};

export const Text = memo(({ children }: Props) => {
  return <p>{children}</p>;
});

// export default Text;
