import React, { createContext, useState } from 'react';

// Create a context
export const CaptainDataContext = createContext();

// Create a provider component
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const value = {
        captain,
        setCaptain,
        isLoading,
        setisLoading,
        error,
        setError
    };
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext