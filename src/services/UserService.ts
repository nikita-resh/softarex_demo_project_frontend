import api from '../http';
import {AxiosResponse} from "axios";
import {UserDto} from "../models/UserDto";

export default class UserService {
    static getUser(id: string): Promise<AxiosResponse<UserDto>> {
        return api.get(`/users/${id}`)
    }

    static editUser(id: string, firstName: string, lastName: string, username: string, password: string,
                    newPassword: string, phoneNumber: string): Promise<AxiosResponse<UserDto>> {
        return api.put(`/users/${id}`, {
            username,
            firstName,
            lastName,
            password,
            newPassword,
            phoneNumber
        })
    }

    static confirmUserPassword(id: string, password: string): Promise<AxiosResponse<boolean>> {
        return api.get(`/users/${id}/validPassword?password=${password}`);
    }

    static deleteUser(id: string) {
        api.delete(`users/${id}`);
    }
}