import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

function DataAdd() {
    const [data, setData] = useState({
        id: 0,
        title: "",
        body: "",
        userId: 0,
    });


    const createPostMutation = useMutation(async (newPost) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, {
            title: newPost.title,
            body: newPost.body,
            userId: newPost.userId,
        });

        console.log(response.data);
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createPostMutation.mutate(data);
    };

    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} />
                <input type="text" name="body" placeholder="Body" onChange={handleChange} />
                <input type="text" name="userId" placeholder="userId" onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default React.memo(DataAdd);