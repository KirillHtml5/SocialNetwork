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

    },
    followUser(id: number) {
        return instanse.post(`follow/${id}`, {})

    },
    unfollowUser(id: number) {
        return instanse.delete(`follow/${id}`)

    }

}
export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`)

    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instanse.get(`profile/` + userId)

    }
}
