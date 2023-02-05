import $api from "../http";

export default class AdminService {
    static async wikiChange(title ,description) {
        return $api.post('/wiki/change', {title, description})
    }
    static async addTeam(name, title ,description) {
        return $api.post('/team/add', {name, title, description})
    }
    static async addRules(number, description) {
        return $api.post('/rules/add', {number, description})
    }
    static async removeRules(number) {
        return $api.post('/rules/remove', {number})
    }
    static async userSetActive(username) {
        return $api.post('/admin/setactive', {username})
    }
    static async chronicleAdd(title, description, tdlDate) {
        return $api.post('/chronicle/add', {title, description, tdlDate})
    }
    static async createUser(username, email, password) {
        return $api.post('/admin/createuser', {username, email, password})
    }
    static async changePassword(username, email, password) {
        return $api.post('/admin/changepassword', {username, email, password})
    }
    static async changeUsername(username, email, newusername) {
        return $api.post('/admin/changeusername ', {username, email, newusername})
    }
}