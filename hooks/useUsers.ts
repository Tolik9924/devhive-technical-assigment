import { useMemo, useState } from "react";
import { User } from "@/components/users/types";
import { filterUsers } from "@/utils/filterUsers";

/**
 * Custom hook that encapsulates all user-related logic.
 * Keeps components lean and focused on rendering.
 */
export function useUsers(initialUsers: User[]) {
  //const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = useMemo(
    () => filterUsers(initialUsers, search, city),
    [initialUsers, search, city],
  );

  // function updateUser(updated: User) {
  //   setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  //   setSelectedUser(null);
  // }

  return {
    filteredUsers,
    search,
    city,
    selectedUser,
    setSearch,
    setCity,
    //selectUser: setSelectedUser,
    //updateUser,
  };
}
