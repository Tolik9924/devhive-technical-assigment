import { useMemo } from "react";
import { User } from "@/components/users/types";
import { filterUsers } from "@/utils/filterUsers";

// Memoized selector hook that returns a filtered list of users
// based on the provided name and city filters.
// Data flow: receives source users and filter object → returns filtered users to UsersClient.

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
