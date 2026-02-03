import { User } from "../types";

import styles from "./userRow.module.css";

/**
 * Single row representation.
 * Memoization could be added if needed.
 */
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
