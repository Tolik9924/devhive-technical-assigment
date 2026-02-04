import { useMemo } from "react";
import { User } from "@/components/users/types";
import { filterUsers } from "@/utils/filterUsers";

/**
 * Custom hook that encapsulates all user-related logic.
 * Keeps components lean and focused on rendering.
 */

type FilterBy = {
  name: string;
  city: string;
};

export const useUsers = (initialUsers: User[], filterBy: FilterBy) => {
  const { name, city } = filterBy;
  const filteredUsers = useMemo(
    () => filterUsers(initialUsers, name, city),
    [initialUsers, name, city],
  );

  return filteredUsers;
};
