import api from '../http';
import {AxiosResponse} from 'axios';
import {AuthenticationResponse} from "../models/response/AuthenticationResponse";
import {UserDto} from "../models/UserDto";

export default class AuthenticationService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthenticationResponse>> {
        return api.post<AuthenticationResponse>("/auth/login", {username, password})
    }

    static async register(firstName: string, lastName: string, username: string, password: string,
                          passwordConfirmation: string, phoneNumber: string): Promise<AxiosResponse<UserDto>> {
        return api.post<UserDto>("/auth/register", {
            firstName, lastName, username, password,
            passwordConfirmation, phoneNumber
        })
    }
}