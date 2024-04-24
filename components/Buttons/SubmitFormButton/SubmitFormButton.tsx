import { FC } from "react";

export const SubmitFormButton: FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="self-end text-sm uppercase text-white underline decoration-teal-600 underline-offset-8"
    >
      Send message
    </button>
  );
};
