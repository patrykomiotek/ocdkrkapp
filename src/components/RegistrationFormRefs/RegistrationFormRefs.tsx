import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useRef,
  useEffect,
} from "react";
import { Button } from "../../ui";

interface FormValues {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormRefs = () => {
  const emailFiledRef = useRef<HTMLInputElement>(null);
  const passwordFiledRef = useRef<HTMLInputElement>(null);
  const languageFiledRef = useRef<HTMLInputElement>(null);

  // const selectedUsers = useRef(new Set());
  // selectedUsers.current.add(123);
  // selectedUsers.current.add(456);
  // selectedUsers.current.add(567);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({
      email: emailFiledRef.current?.value,
      password: passwordFiledRef.current?.value,
      language: languageFiledRef.current?.value,
    });
    // console.log(state);
  };

  useEffect(() => {
    if (emailFiledRef.current) {
      emailFiledRef.current.placeholder = "fill me please";
      emailFiledRef.current.focus();
    }
  }, []);

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    if (passwordFiledRef.current) {
      if (value.length < 8) {
        // passwordFiledRef.current.style.border = "#f00 2px solid";
        passwordFiledRef.current.classList.add("invalid");
      } else {
        // passwordFiledRef.current.style.border = "#000 1px solid";
        passwordFiledRef.current.classList.remove("invalid");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          ref={emailFiledRef}
          id="email"
          type="email"
          defaultValue="jan@kowalski.pl"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordFiledRef}
          id="password"
          type="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input ref={languageFiledRef} id="language" type="text" />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
