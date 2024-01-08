export interface User {
    id: number,
    username: string,
    displayname: string,
    email: string,
    password: string,
    profilePicture?: string,
    balance: number
}