import React from 'react';
import c from './Post.module.css';

type PostPropsType = {
    message: string
    likecount: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={c.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzRD4elqMd31g7I67ZWczP9l4jeo2Kx_c3w&usqp=CAU'/>
            {props.message}
            <div>
                <button>like</button>
                {props.likecount}
            </div>
        </div>


    )
}

export default Post;