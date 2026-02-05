import { UsersClient } from "@/components/users/UsersClient";

import styles from "./page.module.css";

// Server component for the /users route.
// This component defines the page structure and layout only.
// All interactive behavior and client-side state are handled
// inside the UsersClient component.

const UsersPage = async () => {
  return (
    <div className={styles.usersPage}>
      <UsersClient />
    </div>
  );
};

export default UsersPage;
