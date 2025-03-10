export const validateForm = (data) => {
    const errors = {};

    const emailPattern = /\S+@\S+\.\S+/;

    const passPattern =
      /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{6,32}$/;

    const passPattern2 = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{6,32}$/;

    if (!data?.name?.trim()) {
      errors.name = "name is required..";
    } else if (data?.name?.length < 3) {
      errors.name = "name must be at least 4 characters long..";
    }

    if (!data?.email?.trim()) {
      errors.email = "email is required..";
    } else if (!emailPattern.test(data.email)) {
      errors.email = "email is invalid..";
    }
    if (!data?.password?.trim()) {
      errors.password = "password is required..";
    } else if (!passPattern2.test(data.password)) {
      // t least one number, at least one letter, correct length
      errors.password =
        "password must contain at least one number, one letter,and length >=6..";
    }

    return errors;
  };