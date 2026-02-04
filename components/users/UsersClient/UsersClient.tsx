"use client";

import { useState } from "react";
import { Modal } from "@/components/modal/Modal";
import { useUsers } from "@/hooks/useUsers";
import { UsersList } from "../UsersList/UsersList";
import { UsersFilters } from "../UsersFilters/UsersFilters";
import { UserEditForm } from "../UserEditForm";
import { User } from "../types";

import styles from "./usersClient.module.css";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

/**
 * Client orchestrator component.
 * - Holds local state
 * - Coordinates filtering and editing
 * - Delegates rendering to smaller components
 */

export const UsersClient = ({ initialUsers }: { initialUsers: User[] }) => {
  const [users, setUsers] = useState(initialUsers);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterUser, setFilterUser] = useState({
    name: "",
    city: "",
  });

  const filteredUsers = useUsers(users, filterUser);
  const debouncedValue = useDebouncedValue(filteredUsers, 300);

  const onEditUser = (user: User) => {
    setSelectedUser(user);
    setIsOpenModal(true);
  };

  const updateUser = (updated: User) => {
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
    setSelectedUser(null);
    onCloseModal();
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onFilterChange = (field: string, value: string) => {
    setFilterUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.usersClient}>
      USERS PAGE
      <UsersFilters
        search={filterUser.name}
        city={filterUser.city}
        onSearchChange={(value) => onFilterChange("name", value)}
        onCityChange={(value) => onFilterChange("city", value)}
      />
      <UsersList users={debouncedValue} onEdit={onEditUser} />
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <UserEditForm
          user={selectedUser}
          onCancel={onCloseModal}
          onSubmit={updateUser}
        />
      </Modal>
    </div>
  );
};
