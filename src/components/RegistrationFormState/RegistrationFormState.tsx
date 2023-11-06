import { useState } from "react";
import { Button } from "../../ui";

export const RegistrationFormState = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  return (
    <form>
      <div>
        E-mail: {email}, password: {password}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          type="text"
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
