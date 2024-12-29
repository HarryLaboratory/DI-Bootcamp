import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import CharacterCounter from './components/CharacterCounter';
import './App.css';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <ThemeSwitcher />
            <CharacterCounter />
        </div>
    );
};

const AppWithProvider = () => (
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

export default AppWithProvider;


