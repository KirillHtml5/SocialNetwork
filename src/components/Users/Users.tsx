import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsFuncType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    onPageChange: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    followInProgress: number[]
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
                {pages.map((p, index) => {
                    return <span key={index}
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
                                    ? <button disabled={props.followInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.unfollow(u.id)
                                              }}>Unfollow</button>
                                    : <button disabled={props.followInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.follow(u.id)
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