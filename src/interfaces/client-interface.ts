export default interface IClient {
    id: number,
    firstName: string,
    lastName?: string,
    email: string,
    phone: string, 
    comment?: string
}