const EMAIL_REGEX =
  /[a-zA-Z0-9]{3,}([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9.]{3,}\.[a-zA-Z]{3,}/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};
