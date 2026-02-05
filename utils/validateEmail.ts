const EMAIL_REGEX =
  /^[a-zA-Z0-9]{3,}([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]{3,10}\.[a-zA-Z]{2,4}$/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};
