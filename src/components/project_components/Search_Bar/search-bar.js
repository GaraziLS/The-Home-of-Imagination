import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom"

import SingleItem from "../Item_Components/single-item";

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [enteredWord, setEnteredWord] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://devcamp-fullstack-project-backend.onrender.com/tables");
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.log("An error happened", error);
            }
        };

        getData();
    }, []); // Empty dependency array ensures this runs once after initial render

    const handleFilter = (event) => {
        const searchedWord = event.target.value;
        setEnteredWord(searchedWord);
        const newFilter = data.filter(item => {
            return item.item_title.toLowerCase().includes(searchedWord.toLowerCase());
        });
        setFilteredData(newFilter);
    };

    return (
        <div className='search-wrapper'>
            <div className='search-field'>
                <input
                    type='text'
                    placeholder='Start typing to search generators'
                    label="Start typing to search generators"
                    onChange={handleFilter}
                />
            </div>

            {enteredWord && (
                <div className="search-results">
                    {filteredData.length !== 0 ? (
                        filteredData.slice(0, 10).map(item => (
                            <SingleItem
                                key={item.item_id}
                                item_id={item.item_id}
                                title={item.item_title}
                                content={item.item_content}
                                slug={item.item_title}
                                category={item.item_category}
                            />
                        ))
                    ) : (
                        <p>This generator was not found. Do you want to <NavLink to="/create" className="link">create</NavLink> one?</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
