import { UsersClient } from "@/components/users/UsersClient/UsersClient";

import styles from "./page.module.css";

const UsersPage = async () => {
  return (
    <div className={styles.usersPage}>
      <UsersClient />
    </div>
  );
};

export default UsersPage;
