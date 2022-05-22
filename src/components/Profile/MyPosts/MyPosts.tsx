import React, {useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {postsType} from "../../../redux/State";


export type MyPostsPropsType = {
    posts: Array<postsType>
    addPost: (messagePost: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likecount={p.likeCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostButton = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostButton}>Add post</button>
                </div>

            </div>
            <div className={s.postsBlock}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;