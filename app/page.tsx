import { fetchUsers } from "@/lib/fetchUsers";
import { UsersClient } from "@/components/users/UsersClient/UsersClient";

import styles from "./page.module.css";

/**
 * Server Component
 * - Responsible ONLY for data fetching
 * - No client state or interactivity here
 */

export default async function UsersPage() {
  const users = await fetchUsers();

  console.log("USERS: ", users);

  return (
    <div className={styles.usersPage}>
      <UsersClient initialUsers={users} />
    </div>
  );
}
