import {
  forwardRef,
  type ComponentPropsWithRef,
  type Ref,
  MouseEventHandler,
} from "react";

type Props = {
  label: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>; // eventually get from ComponentProps and mark as required
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithRef<"button">;

// stable reference
const styles = {
  color: "#ffffff",
  backgroundColor: "#293250",
};

export const MagicButton = forwardRef(
  (
    { label, onMouseEnter, onMouseLeave, ...rest }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        style={styles}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      >
        {label}
      </button>
    );
  }
);
