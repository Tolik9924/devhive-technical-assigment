import { useMemo, useState } from "react";
import { User } from "@/components/users/types";
import { filterUsers } from "@/utils/filterUsers";

/**
 * Custom hook that encapsulates all user-related logic.
 * Keeps components lean and focused on rendering.
 */

export const useUsers = (initialUsers: User[]) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const filteredUsers = useMemo(
    () => filterUsers(initialUsers, search, city),
    [initialUsers, search, city],
  );

  return {
    filteredUsers,
    search,
    city,
    setSearch,
    setCity,
  };
};
