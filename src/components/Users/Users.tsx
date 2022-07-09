import React from 'react'
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {UsersPropsType} from "./UsersContainer";
import {rootReducerType} from "../../redux/redux-store";


class Users extends React.Component <UsersPropsType, rootReducerType> {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {

            axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)
                    console.log(res.data.items)
                })
        }
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.pageSize)

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
                            className={this.props.usersPage.currentPage === p ? s.selectedPage : s.notselectedPage}
                            onClick={() => {
                                this.onPageChange(p)
                            }}
                        >{p}</span>
                    })
                    }
                </div>

                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <span>
                        <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </div>
                        <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
            </div>)
    }
}

export default Users