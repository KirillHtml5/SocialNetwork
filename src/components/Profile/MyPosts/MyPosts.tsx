import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {postsType} from "../../../index";

export type MyPostsPropsType = {
    posts: Array<postsType>
}

const MyPosts = (props: MyPostsPropsType) => {
    // let posts = [
    //     {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
    //     {id: "2", message: "I am 24", likeCount: "20"},
    //     {id: "3", message: "I am work", likeCount: "5"}
    // ]
    let postsElement = props.posts.map(p => <Post message={p.message} likecount={p.likeCount}/>)
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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;