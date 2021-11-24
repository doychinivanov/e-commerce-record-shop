

export const validateEmail = (email) => {
    const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return emailPattern.test(email.trim());
}

export const validateName = (name) => {
    const MIN_NAME_LENGTH = 3;
    const namePattern = new RegExp(/^[a-zA-Z ]+$/);

    return name.trim().length >= MIN_NAME_LENGTH && namePattern.test(name.trim());
}

export const validatePassword = (password) => {
    // Password must be at least 8 chars, containing at least one numbers and one special char
    const passwordPattern = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?_.\-"]).*$/g);

    return passwordPattern.test(password.trim());
}