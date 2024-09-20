export const Validate = (name, email, message) => {
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!isEmail)
        return "Enter valid email";
    if (name.length < 3)
        return "enter valid name";
    if (message.length === 0)
        return "Say something";
    return null;

}