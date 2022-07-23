import {UserDto} from "../models/UserDto";
import {makeAutoObservable} from "mobx";
import AuthenticationService from "../services/AuthenticationService";
import UserService from "../services/UserService";
import axios from 'axios';
import {AuthenticationResponse} from "../models/response/AuthenticationResponse";
import {API_URL} from "../http";

export default class Store {
    user = {} as UserDto;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: UserDto) {
        this.user = user;
    }

    async login(username: string, password: string, callback: Function) {
        try {
            const response = await AuthenticationService.login(username, password);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            if (response.data.token !== undefined) {
                this.setAuth(true);
                await this.setUserFromDataBase(response.data.userId);
                callback(false);
            }
            callback(true);
        } catch (e) {
            callback(true);
        }
    }

    async register(firstName: string, lastName: string, username: string, password: string, passwordConfirmation: string,
                   phoneNumber: string, callback: Function) {
        try {
            const response = await AuthenticationService.register(firstName, lastName, username, password, passwordConfirmation,
                phoneNumber);
            if (response.data.id !== undefined) {
                await this.login(username, password, callback);
                callback(false);
            } else {
                callback(true);
            }
        } catch (e) {
            callback(true);
        }
    }

    async editUser(firstName: string, lastName: string, username: string, password: string, newPassword: string,
                   phoneNumber: string, callback: Function) {
        try {
            const response = await UserService.editUser(this.user.id, firstName, lastName, username, password, newPassword, phoneNumber);
            if (response.data.id !== undefined) {
                if (newPassword !== undefined && newPassword.length) {
                    await this.login(response.data.username, newPassword, () => {
                    });
                } else {
                    await this.login(response.data.username, password, () => {
                    });
                }
                callback(false);
            } else {
                callback(true);
            }
        } catch (e) {
            callback(true);
        }
    }

    async deleteUser(password: string, callback: Function) {
        try {
            const response = await UserService.confirmUserPassword(this.user.id, password);
            if (response.data) {
                await UserService.deleteUser(this.user.id);
                this.logout();
                callback(false);
            } else {
                callback(true);
            }
        } catch (e) {
            callback(true);
        }
    }

    async logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        this.setAuth(false);
        this.setUser({} as UserDto);
    }

    async checkAuth() {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.post<AuthenticationResponse>(`${API_URL}/auth/refresh`, {refreshToken});
            localStorage.setItem('token', response.data.token);
            if (response.data.token !== undefined) {
                this.setAuth(true);
                await this.setUserFromDataBase(response.data.userId);
            } else {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
            }
        } catch (e) {
            console.log(e);
        }
    }

    async setUserFromDataBase(userId: string) {
        const userFromResponse = await UserService.getUser(userId);
        this.setUser(userFromResponse.data);
    }
}