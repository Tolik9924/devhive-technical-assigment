import { User } from "../types";

import styles from "./userRow.module.css";

// Single row representation.

// Props:
// - user: individual user data
// - onEdit: callback triggered when the user clicks "Edit"

type Props = {
  user: User;
  onEdit: (user: User) => void;
};

export const UserRow = ({ user, onEdit }: Props) => {
  return (
    <div className={styles.userRow}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.city}</div>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>
  );
};
