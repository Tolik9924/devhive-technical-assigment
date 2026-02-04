import { useState } from "react";
import { validateEmail } from "@/utils/validateEmail";
import { User } from "../types";

import styles from "./userEditForm.module.css";

/**
 * Responsible only for editing a user.
 * Uses controlled inputs and local form state.
 */

const USER_FIELDS = {
  name: "name",
  email: "email",
  city: "city",
};

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
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    if (field === USER_FIELDS.email) {
      if (!validateEmail(value)) {
        setError("Invalid email address.");
      } else {
        setError("");
      }
    }

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (!user) return null;

  const handleSubmit = () => {
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
      <div className={styles.field}>
        <input
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className={styles.field}>
        <input
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />
        <div className={styles.errorContainer}>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <input
          value={form.city}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="City"
        />
      </div>

      <div className={styles.formButtons}>
        <button disabled={!!error} type="submit">
          Save
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
