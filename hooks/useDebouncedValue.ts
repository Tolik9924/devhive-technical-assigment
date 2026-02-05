import { useEffect, useState } from "react";

// Delays updating the returned value until the input value
// stops changing for the specified delay.
// Useful for reducing frequent updates (e.g. search, filtering).

// Returns a debounced version of a value to prevent excessive updates.
// Example: debounced filtered users are passed to UsersList to reduce re-renders.

export const useDebouncedValue = <T>(value: T, delay = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
