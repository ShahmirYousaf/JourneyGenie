import React, { useContext, useState, useEffect } from 'react';
import { faCalendar, faMapLocationDot, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './View.css';
import axios from "axios";

const View = () => {
    const location = useLocation();
    const loggedInUser = localStorage.getItem('LoggedInUser');
    const userData = JSON.parse(loggedInUser);
    const userId = userData._id;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slideNumber, setSlideNumber] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/entries/author/${userId}`);
                console.log('Fetched data:', response.data);
                setData(response.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    const handleDelete = async (entryId) => {
        try {
            await axios.delete(`http://localhost:8080/api/entries/${entryId}`);
            setData(prevData => prevData.filter(entry => entry._id !== entryId));
        } catch (err) {
            console.log(err);
        }
    };

    const handleMove = (direction, size) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? size - 1 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === size - 1 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className='view'>
            {data.map(entry => (
                <div key={entry._id} className="postContainer">
                    <div className="postPageBG">
                        <div className="upperContent">
                            <h1>{entry.title}</h1>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faCalendar} /> 
                                {entry.date}
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faMapLocationDot} /> 
                                {entry.location}
                            </p>
                        </div>
                    </div>

                    <div className="leftContainer">
                        {entry.photos ? (
                            <div className="images">
                                <img src={entry.photos[slideNumber]} height="300px" alt="" />
                                {entry.photos.length > 1 && (
                                    <div className="arrows">
                                        <FontAwesomeIcon 
                                            icon={faCircleArrowLeft} 
                                            className="arrow"
                                            onClick={() => handleMove("l", entry.photos.length)} 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faCircleArrowRight} 
                                            className="arrow"
                                            onClick={() => handleMove("r", entry.photos.length)} 
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            "No Images"
                        )}
                    </div>

                    <div className="rightContainer">
                        <p>" {entry.text} "</p>
                        <button className="del_button" style={{ marginRight: "5px" }} onClick={() => handleDelete(entry._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default View;
