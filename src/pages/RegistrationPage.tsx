import { RegistrationFormRefsCustomInput } from "../components/RegistrationFormRefsCustomInput";

export interface RegistrationFormData {
  email?: string;
  password?: string;
  language?: string;
}

export const RegistrationPage = () => {
  const handleSubmit = (data: RegistrationFormData) => {
    console.log(data);
  };

  return (
    <RegistrationFormRefsCustomInput
      onSubmit={handleSubmit}
      values={{ email: "jan@kowalski.pl" }}
    />
  );
};
