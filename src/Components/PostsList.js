// PostsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Absolute imports
import { fetchPosts, addPost, updatePost, deletePost } from '../Store/actions';

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        // Fetch initial posts
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleAddPost = () => {
        // Add post
        const newPost = {
            title: 'New Post Title',
            body: 'New Post Body',
        };
        dispatch(addPost(newPost));
    };

    const handleUpdatePost = (post) => {
        // Update post
        const updatedPost = {
            ...post,
            title: 'Updated Title',
        };
        dispatch(updatePost(updatedPost));
    };

    const handleDeletePost = (postId) => {
        // Delete post
        dispatch(deletePost(postId));
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                        <button onClick={() => handleUpdatePost(post)}>Update</button>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddPost}>Add Post</button>
        </div>
    );
};

export default PostsList;
