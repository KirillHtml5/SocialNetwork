import React, {useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ActionType, addPostAC, postsType, updatePostAC} from "../../../redux/State";


export type MyPostsPropsType = {
    posts: Array<postsType>
    dispatch: (action: ActionType) => void
    newTextPost: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likecount={p.likeCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostButton = () => {

        // let action = {type: "ADD-POST"} as const
        props.dispatch(addPostAC())

    }
    const changePost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            // let action = {type: "UPDATE-TEXT-POST", newTextPost: newPostElement.current.value} as const
            props.dispatch(updatePostAC(text))

        }
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newTextPost} onChange={changePost}/>
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