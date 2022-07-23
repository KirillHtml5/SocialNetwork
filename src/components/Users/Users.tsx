import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsFuncType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    onPageChange: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users: React.FC<UsersPropsFuncType> = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i < 50) {
            pages.push(i)
        }

    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.notselectedPage}
                        onClick={() => {
                            props.onPageChange(p)
                        }}
                    >{p}</span>
                })
                }
            </div>

            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "8614a98c-2a6d-4045-9b26-60ea2e9faac3"
                                                }
                                            })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }

                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "8614a98c-2a6d-4045-9b26-60ea2e9faac3"
                                                }
                                            })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>Follow</button>}

                            </div>
                        </span>

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

                    </div>)
            }
        </div>
    );
};

export default Users;