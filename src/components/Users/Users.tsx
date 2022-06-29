import React from 'react'
import {usersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

export type UsersPropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void

}

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((res) => {
                    props.setUsers(res.data.items)
                    console.log(res.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}