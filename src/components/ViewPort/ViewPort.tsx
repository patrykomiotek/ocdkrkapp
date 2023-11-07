import { useViewPort } from "../../hooks/useViewPort";

export const ViewPort = () => {
  const size = useViewPort();
  return (
    <div>
      Size X: {size.x} Y: {size.y}
    </div>
  );
};
