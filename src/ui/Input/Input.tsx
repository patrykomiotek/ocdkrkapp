import { useId, forwardRef, type ComponentPropsWithRef, type Ref } from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

// forwardRef(function Component(props, ref) {
// body
//})

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} {...rest} />
      </div>
    );
  }
);
