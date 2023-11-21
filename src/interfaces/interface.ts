export interface userinfo {
    user_id: number,
    user_name: string,
    user_password: string,
    manager: boolean,
    user_status: number,
}

export const userinfo = {
    user_id: 0,
    user_name: "",
    user_password: "",
    manager: false,
    user_status: 0,
}