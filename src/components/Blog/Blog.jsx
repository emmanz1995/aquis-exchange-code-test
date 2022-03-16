import React, { useState, useEffect } from 'react';
import { blogPosts } from '../../Data';
import './blog.scss';
import PostCard from '../Cards/PostCards/PostCard';

const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts(blogPosts)
    }, [])
    return (
        <div className="blog">
            {posts?.map(post => (
                <PostCard post={post} key={post?.title} />
            ))}
        </div>
    );
}

export default Blog;
