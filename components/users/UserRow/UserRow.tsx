import { Button } from "@/ui-components/Button";
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
      <div className={styles.name}>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <div className={styles.userItem}>{user.city}</div>
      <div className={styles.edit}>
        <Button onClick={() => onEdit(user)} size="xs">
          Edit
        </Button>
      </div>
    </div>
  );
};
