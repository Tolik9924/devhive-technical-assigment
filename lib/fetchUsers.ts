import { User } from "@/components/users/types";
import { UserDTO } from "./types";

/**
 * Server-side data fetching.
 * This function is isolated to make the data source
 * easy to replace (API / mock / DB) in the future.
 */

export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: UserDTO[] = await res.json();

    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
    }));
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
}
