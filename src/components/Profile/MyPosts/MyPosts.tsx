import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className='posts'>
                <Post message='Hi, my name Kirill' likecount='15'/>
                <Post message='I am 24' likecount='20'/>

            </div>
        </div>
    )
}

export default MyPosts;