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
      {users.map((user) => (
        <UserRow key={user.id} user={user} onEdit={onEdit} />
      ))}
    </div>
  );
};
