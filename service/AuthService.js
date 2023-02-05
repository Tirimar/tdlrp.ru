import $api from "../http";


export default class AuthService {
    static async login(username, password){
        return $api.post('/auth/signin', {username: username, password: password})
    }

    static async registration(username ,email, password) {
        return $api.post('/auth/signup', {username: username,email: email,password: password})
    }

    static async logout() {
        return localStorage.removeItem('token');
    }

}