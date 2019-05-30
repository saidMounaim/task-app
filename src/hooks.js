import { useState, useEffect } from 'react';


export const useFetch = (url, initialState) => {

    const [results, setResults] = useState(initialState);

    useEffect (() => {

        fetch(url)
            .then(response => response.json())
            .then(json => setResults(json));

    }, [])

    return results;

}