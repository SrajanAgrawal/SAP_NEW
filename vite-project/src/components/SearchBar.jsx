
import { citiesArray } from "../constants/citiesArray.js"
import { useState } from 'react';
import axios from "axios"
import EventCard from "./EventCard.jsx";
import { Datepicker, Label } from 'flowbite-react'
import  Select  from 'react-select'

const SearchBar = () => {



    const [searchQuery, setSearchQuery] = useState('');
    // State for the suggestions
    const [suggestions, setSuggestions] = useState([]);
    const [eventsData, setEventsData] = useState([{}]);
    const [mode, setMode] = useState("")

  const options = [
    { value: "Online", label: "Online"},
    { value: "Hybrid", label: "Hybrid"},
    { value: "In-Person", label: "In-Person"},
  ]

    // Handler for handling search input changes
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value === "") {
            setSuggestions([]);
            return;
        }

        const filteredSuggestions = citiesArray.filter((city) =>
            city.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    // Handler for handling form submission (you can modify this as needed)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle search functionality here
        console.log("Search query:", searchQuery);
        // if the query is not from the suggestions list, show error message
        if (!citiesArray.includes(searchQuery)) {
            alert("Please enter a valid city name");
            return;
        }

        // call the api


        await axios.post(`http://localhost:3000/api/v1/events/searchEventsByQuery?city=${searchQuery}`).then((response) => {
            console.log(response.data);
            setEventsData(response.data.events);
        }).catch((error) => {
            console.log(error);
        });

    };

    const handleModeChange = (selectedOption) => {
        setMode(selectedOption.value);
    };


    return (
        <>

            <form onSubmit={handleSubmit} className="flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search events in your city, country or state..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className=" w-[50%] text-black border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                    Search
                </button>
            </form>
            <div className="suggestions-container  p-5 ">
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="cursor-pointer pb-1">{suggestion}</li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-row justify-between w-[60%] m-auto my-10'>

                {/*Mode Option*/}
                <div className='w-[30%]'>
                    <Label htmlFor="Mode" value="Mode" />
                    <Select options={options} value={mode ? options.find(option => option.value === mode) : null} placeholder="Mode" onChange={handleModeChange} />
                </div>


                {/*Filter by date */}
                <div className='w-[25%] '>
                    <Label htmlFor="Filter By Date" value="Filter By Date " />
                    <Datepicker />

                </div>


            </div>
            <div className="events-list flex flex-row justify-around w-[90%]">
                {eventsData.map((event, index) => (
                    
                    <EventCard key={index} event={event}  mode={mode}/>
                ))}
            </div>

        </>
    )
}

export default SearchBar