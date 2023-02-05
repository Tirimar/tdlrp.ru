import AuthService from "../service/AuthService";
import {makeAutoObservable} from "mobx";
import AdminService from "../service/AdminService";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(username, password, popup, message) {
        popup = popup || 0;
        message = message || 0;
        try {
            const response = await AuthService.login(username, password);
            if (typeof window !== 'undefined') {
                window.sessionStorage.setItem('username', response.data.username);
                window.sessionStorage.setItem('token', response.data.token);
                window.sessionStorage.setItem('roles', response.data.roles[0]);
            }
            this.setAuth(true);
            this.setUser({"id": response.data.id,
                "username": response.data.username,
                "email": response.data.email,
                "roles": response.data.roles[0]
            });
        } catch (e) {
            if(popup!=0){popup(message);}
        }
    }

    getDate(){
        let zero = new Date(2022, 0, 1, 0, 0, 0, 0);
        let date = new Date();
        let x = date.getFullYear() - zero.getFullYear();
        let y = date.getMonth() - zero.getMonth();
        let z = date.getDate() - zero.getDate();
        let tdlhrs = (date.getHours() - zero.getHours());
        let tdlmins = ((date.getMinutes() - zero.getMinutes()) + (tdlhrs * 60)) * 4;
        let tdlclocks1 = Math.floor(tdlmins / 60);
        let tdldy = x * 360;
        let tdldm = y * 30;
        let tdlsumy = Math.floor(((tdldy + tdldm + z) * 4) / 360);
        let tdlsumm = Math.floor((((tdldy + tdldm + z) * 4) % 360) / 30);
        let tdlsumd = Math.floor((((tdldy + tdldm + z) * 4) % 360) % 30);
        let zeropointy = 522 + tdlsumy;
        let zeropointm = tdlsumm + 1;
        let zeropointd = tdlsumd + 1 + Math.floor(tdlclocks1 / 24);
        let zeropointhours = Math.floor(tdlclocks1 % 24);
        let zeropointminutes = (tdlmins % 60);
        if(zeropointm == 1){
            zeropointm = "янв";
        } else if(zeropointm == 2){
            zeropointm = "фев";
        } else if(zeropointm == 3){
            zeropointm = "мар";
        } else if(zeropointm == 4){
            zeropointm = "апр";
        } else if(zeropointm == 5){
            zeropointm = "май";
        } else if(zeropointm == 6){
            zeropointm = "июн";
        } else if(zeropointm == 7){
            zeropointm = "июл";
        } else if(zeropointm == 8){
            zeropointm = "авг";
        } else if(zeropointm == 9){
            zeropointm = "сен";
        } else if(zeropointm == 10){
            zeropointm = "окт";
        } else if(zeropointm == 11){
            zeropointm = "ноя";
        } else if(zeropointm == 12){
            zeropointm = "дек";
        }
        return `${zeropointd} ${zeropointm} ${zeropointy}` ;
    }

    async registration(username, email, password, popup, message, message2, message3) {
        popup = popup || 0;
        message = message || 0;
        message2 = message2 || 0;
        message3 = message3 || 0;
        try {
            const response = await AuthService.registration(username, email, password);
            if(popup!=0){ popup(message2)}
            //if (popup!=0 && message3 != 0) {popup(message3)}
        } catch (e) {
            if(popup!=0){ popup(message)}
        }
    }

    async logout() {
        try {
            await window.sessionStorage.removeItem('token');
            await window.sessionStorage.removeItem('username');
            await window.sessionStorage.removeItem('key');
            await window.sessionStorage.removeItem('roles');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {

        }
    }
    async wikiChange(title, description) {
        try {
            const response = await AdminService.wikiChange(title, description);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async addTeam(name, title ,description){
        try {
            const response = await AdminService.addTeam(name, title ,description);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async addRules(number, description){
        try {
            const response = await AdminService.addRules(number, description);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async removeRules(number){
        try {
            const response = await AdminService.removeRules(number);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async userSetActive(username){
        try {
            const response = await AdminService.userSetActive(username);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async createUser(username, email, password, popup, message, message2) {
        popup = popup || 0;
        message = message || 0;
        message2 = message2 || 0;
        try {
            const response = await AdminService.createUser(username, email, password);
            if(popup!=0){ popup(message2)}
        } catch (e) {
            if(popup!=0){ popup(message)}
        }
    }
    async chronicleAdd(title, description, tdlDate){
        try {
            const response = await AdminService.chronicleAdd(title, description, tdlDate);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async changePass(username, email, newPassword, popup, message, message2){
        popup = popup || 0;
        message = message || 0;
        message2 = message2 || 0;
        try {
            const response = await AdminService.changePassword(username, email, newPassword);
            if(popup!=0){ popup(message2)}
        } catch (e) {
            if(popup!=0){ popup(message)}
        }
    }
    async changeUsername(username, email, newusername, popup, message, message2){
        popup = popup || 0;
        message = message || 0;
        message2 = message2 || 0;
        try {
            const response = await AdminService.changeUsername(username, email, newusername);
            if(popup!=0){ popup(message2)}
        } catch (e) {
            if(popup!=0){ popup(message)}
        }
    }

}