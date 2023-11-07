import {
  useEffect,
  type ComponentPropsWithRef,
  useRef,
  MouseEventHandler,
} from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"button">;

// stable reference
const styles = {
  color: "#ffffff",
  backgroundColor: "#293250",
};

export const MagicButton = ({ label, ...rest }: Props) => {
  // new reference on each render
  // const styles = {
  //   color: "#ffffff",
  //   backgroundColor: "#293250",
  // };
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const numberRef = useRef<number>(0);
  // const setRef = useRef(new Set());

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#F24727";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#17A789";
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#293250";
    }
  };

  return (
    <button
      ref={buttonRef}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {label}
    </button>
  );
};
