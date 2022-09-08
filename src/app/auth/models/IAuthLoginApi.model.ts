export interface ILoginApiResult {
    id: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    isAdmin: boolean,
    isUser: boolean,
    hadCompany: boolean
}