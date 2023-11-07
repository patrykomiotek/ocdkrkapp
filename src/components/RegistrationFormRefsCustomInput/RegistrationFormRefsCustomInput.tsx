import { ChangeEventHandler, FormEventHandler, useRef, useEffect } from "react";
import { Button, Input } from "../../ui";
import { RegistrationFormData } from "../../pages/RegistrationPage";

type Props = {
  onSubmit: (data: RegistrationFormData) => void;
  values?: RegistrationFormData;
};

export const RegistrationFormRefsCustomInput = ({
  values,
  onSubmit,
}: Props) => {
  const emailFiledRef = useRef<HTMLInputElement>(null);
  const passwordFiledRef = useRef<HTMLInputElement>(null);
  const languageFiledRef = useRef<HTMLInputElement>(null);

  // const selectedUsers = useRef(new Set());
  // selectedUsers.current.add(123);
  // selectedUsers.current.add(456);
  // selectedUsers.current.add(567);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit({
      email: emailFiledRef.current?.value || "",
      password: passwordFiledRef.current?.value || "",
      language: languageFiledRef.current?.value || "",
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
      <Input
        ref={emailFiledRef}
        label="E-mail"
        type="email"
        defaultValue={values?.email}
      />
      <Input
        ref={passwordFiledRef}
        label="Password"
        type="password"
        defaultValue={values?.password}
      />
      <Input
        ref={languageFiledRef}
        label="Language"
        defaultValue={values?.language}
      />

      <Button type="submit" label="Send" />
    </form>
  );
};
