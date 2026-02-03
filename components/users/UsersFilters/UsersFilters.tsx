import styles from "./usersFilters.module.css";

/**
 * Controlled filters component.
 * No business logic here.
 */

/**
 * Controlled filters component.
 * No business logic here.
 */

export const UsersFilters = ({
  search,
  city,
  onSearchChange,
  onCityChange,
}: {
  search: string;
  city: string;
  onSearchChange: (v: string) => void;
  onCityChange: (v: string) => void;
}) => {
  return (
    <div className={styles.usersFilters}>
      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <input
        placeholder="Filter by city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />
    </div>
  );
};
