import { useState } from "react";
import { validateEmail } from "@/utils/validateEmail";
import { EMAIL_ERROR_MESSAGE, USER_FIELDS } from "./constants";
import { User } from "../types";

import styles from "./userEditForm.module.css";

// Client-side controlled form responsible for editing a single user.
// It manages its own local form state and validation (email),
// and delegates persistence of changes to the parent component via callbacks.

// This form intentionally avoids external form libraries (e.g. React Hook Form)
// because of its small size and simple validation requirements.
// Managing state locally keeps the implementation lightweight and readable.

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
        setError(EMAIL_ERROR_MESSAGE);
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
          onChange={(e) => handleChange(USER_FIELDS.name, e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className={styles.field}>
        <input
          value={form.email}
          onChange={(e) => handleChange(USER_FIELDS.email, e.target.value)}
          placeholder="Email"
        />
        <div className={styles.errorContainer}>
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <input
          value={form.city}
          onChange={(e) => handleChange(USER_FIELDS.city, e.target.value)}
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
