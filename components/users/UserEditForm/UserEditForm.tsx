import { useState } from "react";
import { validateEmail } from "@/utils/validateEmail";
import { User } from "../types";

import styles from "./userEditForm.module.css";

/**
 * Responsible only for editing a user.
 * Uses controlled inputs and local form state.
 */

export const UserEditForm = ({
  user,
  onSubmit,
  onCancel,
}: {
  user: User | null;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}) => {
  const [form, setForm] = useState(user || { name: "", email: "", city: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (!user) return null;

  const handleSubmit = () => {
    if (!validateEmail(form.email)) return;

    onSubmit({
      ...user,
      name: form.name,
      email: form.email,
      city: form.city,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Edit User</h3>
      <input
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name"
      />
      <input
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
      />
      <input
        value={form.city}
        onChange={(e) => handleChange("city", e.target.value)}
        placeholder="City"
      />

      <div className={styles.formButtons}>
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
