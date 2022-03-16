import React from 'react';
import './postCard.scss';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
    const navigate = useNavigate();
    return (
        <div className="postCard">
            <div className="postCard__header">
                <img src={post?.image} alt="" className="postCard__image" />
            </div>
            <div className="postCard__body">
                <h3>{post?.title}</h3>
                <p>{post?.preview}</p>
                <button className="btn-more" onClick={() => navigate(`/post/${post?.title}`)}>Read More</button>
            </div>
        </div>
    );
}

export default PostCard;
