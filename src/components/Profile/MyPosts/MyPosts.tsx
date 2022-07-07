import React, {useRef} from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: PostsPropsType) => {

    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likecount={p.likeCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostButton = () => {

        props.addPost()

    }
    const changePost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updatePost(text)

        }
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.profilePage.newTextPost} onChange={changePost}
                              placeholder="Enter your post"/>
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