import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { Button } from "../../ui";

interface FormValues {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormState = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [language, setLanguage] = useState<string>("");
  const [state, setState] = useState<FormValues>({
    email: "",
    password: "",
    language: "",
  });

  // const handleChange = (event: ChangeEvent) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setState({
      ...state,
      [id]: value,
    });
  };

  // const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {};

  return (
    <form>
      <div>
        E-mail: {state.email}, password: {state.password}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" type="text" onChange={handleChange} />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
