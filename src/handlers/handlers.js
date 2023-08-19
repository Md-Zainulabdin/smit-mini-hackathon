import { compare, hash } from "bcryptjs";
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// Get User Form Database

export const getUsers = () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

// Set User in Database

export const setUser = async ({ firstName, lastName, email, password }) => {
    let users = getUsers();

    const isEmailFound = Boolean(verifyEmail(email));

    if (isEmailFound) {
        throw new Error("user already exist with this email..")
    }

    const hashedPassword = await hash(password, 12);
    users.push({
        id: users.length + 1,
        firstName,
        lastName,
        email,
        password: hashedPassword,
    })

    fs.writeFileSync(filePath, JSON.stringify(users))

}

// verify email

export const verifyEmail = (email) => {
    const users = getUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

// verify password

export const verifyPassword = async (hashedPassword, passowrd) => {
    let isFound = await compare(passowrd, hashedPassword);
    return isFound;
}