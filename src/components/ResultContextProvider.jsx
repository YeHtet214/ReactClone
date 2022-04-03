import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const BASE_URL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${BASE_URL}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'ce2859c11emshe0c910b863251d5p1d863ajsn80feaf611f69'
            }
        })

        const data = await response.json();

        if ( type.includes('/news') ) {
            setResults(data.entries);
        } else if ( type.includes('/image')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
        
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, isLoading, results, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);