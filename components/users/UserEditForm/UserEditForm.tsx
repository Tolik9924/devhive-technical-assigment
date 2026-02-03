import { useState } from "react";
import { User } from "../types";
import { validateEmail } from "@/utils/validateEmail";

/**
 * Responsible only for editing a user.
 * Uses controlled inputs and local form state.
 */
type Props = {
  user: User;
  onSubmit: (user: User) => void;
  onCancel: () => void;
};

export const UserEditForm = ({ user, onSubmit, onCancel }: Props) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.address.city);

  function handleSubmit() {
    if (!validateEmail(email)) return;

    onSubmit({
      ...user,
      name,
      email,
      address: { ...user.address, city },
    });
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <button onClick={handleSubmit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
