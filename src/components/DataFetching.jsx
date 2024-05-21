import React from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

function DataFetching() {
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery("posts", async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    });

    const deletePostMutation = useMutation(async (postId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    });

    const displayLimit = 5;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {posts.slice(0, displayLimit).map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => deletePostMutation.mutate(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default React.memo(DataFetching);