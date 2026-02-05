// Validates that a given email string matches the expected format.
// Requirements:
// - Local part (before @) is at least 3 characters, may include ., _, or -
// - Domain part is 3–10 alphanumeric characters
// - Top-level domain (TLD) is 2–4 letters
// Returns true if the email is valid, false otherwise.

const EMAIL_REGEX =
  /^[a-zA-Z0-9]{3,}([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]{3,10}\.[a-zA-Z]{2,4}$/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};
