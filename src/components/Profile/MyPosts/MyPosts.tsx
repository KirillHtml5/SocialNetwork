import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    let postData = [
        {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
        {id: "2", message: "I am 24", likeCount: "20"}

    ]
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
                <Post message={postData[0].message} likecount={postData[0].likeCount}/>
                <Post message={postData[1].message} likecount={postData[1].likeCount}/>


            </div>
        </div>
    )
}

export default MyPosts;