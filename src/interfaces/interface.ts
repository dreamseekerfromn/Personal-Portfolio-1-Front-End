export interface userinfoInterface {
    user_id: number,
    user_email: string,
    user_name: string,
    user_password: string,
    manager: boolean,
    user_status: number,
}

export const userinfoObjProps = {
    user_id: 0,
    user_email: "",
    user_name: "",
    user_password: "",
    manager: false,
    user_status: 0,
}

export interface roomListInterface {
    room_id: number,
    room_name: string,
}

export const roomListObjProps = {
    room_id: 0,
    room_name: "",
}

export interface IMessage {
    user_name: string | undefined;
    message: string | undefined;
}

export const IMessageInitProps = {
    user_name: "",
    message: "",
}