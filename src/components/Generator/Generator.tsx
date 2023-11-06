import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Text, Button } from "../../ui";

export const Generator = () => {
  // const state = useState(uuidv4());
  const [id, setId] = useState<string>(uuidv4());

  // let id = uuidv4();

  const handleClick = () => {
    // id = uuidv4();
    // console.log(id);
    // state[1](uuidv4());
    setId(uuidv4());
  };

  return (
    <div>
      <Text>UUID: {id}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </div>
  );
};
