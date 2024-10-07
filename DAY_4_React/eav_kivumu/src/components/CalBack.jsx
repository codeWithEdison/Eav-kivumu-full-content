import React, { useCallback, useState, useEffect, useRef } from 'react';

const userList = ["john", "jane", "alice", "bob", "charlie", "ishimwe"];

const CalBack = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userList);

    const renderCount = useRef(0);

    // Increment the render count each time the component re-renders
    useEffect(() => {
        renderCount.current += 1;
        console.log(`Component has re-rendered ${renderCount.current} times`);
    });

    // Callback function with a log to track when it's being called
    const handleSearch = useCallback((e) => {
        e.preventDefault();
        console.log('handleSearch function executed');
        
        
        setFilteredUsers(userList.filter(user =>
            user.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, [searchTerm]);

    return (
        <div>
            <h2>Search Users</h2>
            <input type="text"
                value={searchTerm}
                onChange={e => {
                    setSearchTerm(e.target.value);
                    handleSearch(e); // Call the callback whenever the input changes
                }}
            />
            <button onClick={handleSearch}>Search</button>
            
            <ul>
                {filteredUsers.map(
                    (user, index) =>
                        (<li key={index}>{user}</li>)
                )}
            </ul>

            <p>{`Component has re-rendered ${renderCount.current} times`}</p>
        </div>
    );
};

export default CalBack;
