import { User } from "@/components/users/types";

/**
 * Pure function for client-side filtering.
 * Kept outside of JSX for clarity and testability.
 */

export const filterUsers = (
  users: User[],
  search: string,
  city: string,
): User[] => {
  return users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(search.toLowerCase());

    const matchesCity = user.city.toLowerCase().includes(city.toLowerCase());

    return matchesName && matchesCity;
  });
};
