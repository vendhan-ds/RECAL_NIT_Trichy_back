import React, { useState, useEffect } from 'react';

function Home() {
    console.log("HOme");
    let [message, setMessage] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/")
        .then(response => response.json())
        .then(data => setMessage(data.data))
    }, []);
    return (
        <div>
            <h1><a href='/test'>Home</a></h1>
            <h2>{message}</h2>
        </div>
    );
}

function Test() {
    console.log("TEst");
    return (
        <h1>Test</h1>
    );
}

function NotFound() {
    console.log("NOt Found");
    return (
        <h1>NotFound</h1>
    );
}

export default Home;
export {
    Test,
    NotFound
};
