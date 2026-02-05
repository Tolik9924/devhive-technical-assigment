import styles from "./usersFilters.module.css";

// Presentational component responsible for rendering user filter inputs.
// It receives current filter values and change handlers via props.
// and does not manage any internal state or filtering logic.

// Props:
// - search, city: current filter values from UsersClient
// - onSearchChange, onCityChange: callbacks to update filters in UsersClient
// This component does not hold any state or perform filtering itself.

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
