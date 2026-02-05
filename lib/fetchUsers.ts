import { User } from "@/components/users/types";
import { UserDTO } from "./types";

// Fetches users from the external API and maps the response
// from DTOs to the internal User domain model.
// Returns an empty array if the request fails.

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
