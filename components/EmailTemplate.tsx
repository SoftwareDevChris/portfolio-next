import { FC } from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export const EmailTemplate: FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Message recieved from portfolio website</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
