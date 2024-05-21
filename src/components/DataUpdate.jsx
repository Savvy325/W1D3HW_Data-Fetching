import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

function DataUpdate() {
    const [data, setData] = useState({
        id: 0,
        title: "",
        body: "",
        userId: 0,
    });

    const updatePostMutation = useMutation(async (updatedPost) => {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
            {
                id: updatedPost.id,
                title: updatedPost.title,
                body: updatedPost.body,
                userId: updatedPost.userId,
            }
        );

        console.log(response.data);
    });

    const handleUpdateChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        updatePostMutation.mutate(data);
    };

    return (
        <form action="submit" onSubmit={handleUpdateSubmit}>
            <input type="text" name="id" placeholder="Id" onChange={handleUpdateChange} />
            <input type="text" name="title" placeholder="Title" onChange={handleUpdateChange} />
            <input type="text" name="body" placeholder="Body" onChange={handleUpdateChange} />
            <input type="text" name="userId" placeholder="userId" onChange={handleUpdateChange} />
            <button type="submit">Update</button>
        </form>
    );
}

export default React.memo(DataUpdate);