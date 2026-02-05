import { UsersClient } from "@/components/users/UsersClient/UsersClient";

import styles from "./page.module.css";

/**
 * Server Component
 * - Responsible ONLY for data fetching
 * - No client state or interactivity here
 */

const UsersPage = async () => {
  return (
    <div className={styles.usersPage}>
      <UsersClient />
    </div>
  );
};

export default UsersPage;
