import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "8614a98c-2a6d-4045-9b26-60ea2e9faac3"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id: number) {
        return instanse.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollowUser(id: number) {
        return instanse.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }

}
export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instanse.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
