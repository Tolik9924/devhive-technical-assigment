import { User } from "../types";
import { UserRow } from "../UserRow";

import styles from "./usersList.module.css";

// Pure list component.
// Responsible only for rendering.

// Props:
// - users: array of filtered User objects from UsersClient
// - onEdit: callback to open the edit form for a selected user

export const UsersList = ({
  users,
  onEdit,
}: {
  users: User[];
  onEdit: (user: User) => void;
}) => {
  return (
    <div className={styles.usersList}>
      <div className={styles.headerInfo}>
        <div className={styles.name}>Name</div>
        <div className={styles.email}>Email</div>
        <div className={styles.city}>City</div>
      </div>
      {users.map((user) => (
        <UserRow key={user.id} user={user} onEdit={onEdit} />
      ))}
    </div>
  );
};
