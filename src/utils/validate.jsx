export const checkValidData = (fullname, email, password) => {
  const isFullNameisValid = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(fullname);
  const isEmailisValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordisValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);
  if (!isEmailisValid) return "Full Name is not valid";
  if (!isEmailisValid) return "Email is not valid";
  if (!isPasswordisValid) return "Password is not valid";

  return null;
};
