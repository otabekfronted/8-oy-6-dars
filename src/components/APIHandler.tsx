import { useEffect } from "react";

const APIHandler = () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
    ];

    const fetchSequentially = async () => {
        for (const url of urls) {
            try {
                console.log(`Fetching from URL: ${url}`);
                const response = await fetch(url);
                const data = await response.json();
                console.log("Result:", data);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        }
    };

    useEffect(() => {
        fetchSequentially();
    });

    return <div>API Sequential Fetch - Check Console</div>;
};

export default APIHandler;
