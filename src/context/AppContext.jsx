// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const value = {
        isLoading,
        setIsLoading,
        isMenuOpen,
        toggleMenu,
        currentLanguage,
        setCurrentLanguage
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

export default AppContext;