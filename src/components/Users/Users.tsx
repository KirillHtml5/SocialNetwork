import React from 'react'
import {usersType} from "../../redux/users-reducer";
import s from "./Users.module.css"

export type UsersPropsType = {
    users: Array<usersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<usersType>) => void

}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
                followed: true,
                fullName: 'Kirill123',
                status: 'I am a student',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '2',
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
                followed: true,
                fullName: 'Natasha',
                status: 'I am a wife',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '3',
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
                followed: false,
                fullName: 'Nikita',
                status: 'I am a children',
                location: {city: 'Gorky', country: 'Belarus'}
            },
            {
                id: '4',
                photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
                followed: false,
                fullName: 'Liza',
                status: 'I am a girl',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.photo}/>
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}