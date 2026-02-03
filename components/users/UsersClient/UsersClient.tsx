"use client";

import { useUsers } from "@/hooks/useUsers";
import { UsersList } from "../UsersList/UsersList";
import { UsersFilters } from "../UsersFilters/UsersFilters";
import { UserEditForm } from "../UserEditForm";
import { User } from "../types";

import styles from "./usersClient.module.css";
import { useState } from "react";

/**
 * Client orchestrator component.
 * - Holds local state
 * - Coordinates filtering and editing
 * - Delegates rendering to smaller components
 */

type Props = {
  initialUsers: User[];
};

export const UsersClient = ({ initialUsers }: Props) => {
  const [users, setUsers] = useState(initialUsers);

  console.log("USERS: ", users);

  const {
    filteredUsers,
    selectedUser,
    search,
    city,
    setSearch,
    setCity,
    //selectUser,
    //updateUser,
  } = useUsers(initialUsers);

  return (
    <div className={styles.usersClient}>
      USERS PAGE
      <UsersFilters
        search={search}
        city={city}
        onSearchChange={setSearch}
        onCityChange={setCity}
      />
      <UsersList users={filteredUsers} onEdit={() => {}} />
      {/* <UsersList users={filteredUsers} onEdit={selectUser} /> */}
      {/* {selectedUser && (
        <UserEditForm
          user={selectedUser}
          onCancel={() => selectUser(null)}
          onSubmit={updateUser}
        />
      )} */}
    </div>
  );
};
