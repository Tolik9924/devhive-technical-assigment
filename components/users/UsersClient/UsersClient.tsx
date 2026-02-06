"use client";
// This component intentionally contains UI state and side effects.
// Server-side data fetching and routing are handled by the page component.

import { useEffect, useState } from "react";
import { Loading } from "@/ui-components/Loading/Loading";
import { Modal } from "@/components/modal/Modal";
import { useUsers } from "@/hooks/useUsers";
import { fetchUsers } from "@/lib/fetchUsers";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { UsersList } from "../UsersList/UsersList";
import { UsersFilters } from "../UsersFilters/UsersFilters";
import { UserEditForm } from "../UserEditForm";
import { User } from "../types";

import styles from "./usersClient.module.css";

// Client-side container component responsible for all interactive behavior
// on the Users page: data fetching, filtering, debounced search,
// edit modal state, and local user updates.
// This component coordinates UI state and delegates rendering
// to presentational components.

// This feature intentionally avoids global state management.
// All state is local and derived within the component.
// For larger applications with shared or persistent state,
// a solution like Zustand or Redux would be more appropriate.

// Data flow:
// - Props to child components: filters, users, handlers

export const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterUser, setFilterUser] = useState({
    name: "",
    city: "",
  });

  const filteredUsers = useUsers(users, filterUser);
  const debouncedValue = useDebouncedValue(filteredUsers, 300);

  const getUsers = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const users = await fetchUsers();
      setUsers(users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
      {loading ? (
        <Loading />
      ) : (
        <UsersList users={debouncedValue} onEdit={onEditUser} />
      )}
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
