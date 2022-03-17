import React from 'react';
import { blogPosts } from '../../Data';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { title } = useParams();
    const post = blogPosts?.find(t => t?.title === title);
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__title__head">
                    <h1>{post?.title}</h1>
                    <span className="post-info">
                        <p><b>Written By:</b> {post?.author}</p>
                        <p>{post?.createdAt}</p>
                        <p>{post?.readTime} Read</p>
                    </span>
                </div><br/>
                <div className="post__imageContainer">
                    <img src={post?.image} alt="" width="600" height="400" className="post__image" />
                </div>
            </div><br />
            <div className="post__body">
                <span>
                    <h3 className="post-subheading">{post?.subHeading1}</h3>
                    <p className="post-text">{post?.content1}</p>
                </span><br/>
                <span>
                    <h3 className="post-subheading">{post?.subHeading2}</h3>
                    <p className="post-text">{post?.content2}</p>
                </span><br/>
                <span>
                    <h3 className="post-subheading">{post?.subHeading3}</h3>
                    <p className="post-text">{post?.content3}</p>
                </span><br/>
                <span>
                    <h3 className="post-subheading">{post?.subHeading4}</h3>
                    <p className="post-text">{post?.content4}</p>
                </span>
            </div>
        </div>
    );
}

export default Post;
