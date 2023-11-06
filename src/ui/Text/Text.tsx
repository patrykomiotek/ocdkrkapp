type Props = {
  // children: React.ReactNode;
  children: string;
};

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

// export default Text;
