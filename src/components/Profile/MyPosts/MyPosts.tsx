import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.postsBlock}>
                <Post message='Hi, my name Kirill' likecount='15'/>
                <Post message='I am 24' likecount='20'/>

            </div>
        </div>
    )
}

export default MyPosts;