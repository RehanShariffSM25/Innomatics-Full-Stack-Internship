import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import countryData from './data/countries.json';

const App = () => {
    const [filteredCountries, setFilteredCountries] = useState(countryData);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredCountries(countryData);
            return;
        }
        const filtered = countryData.filter(
            (country) =>
                country.country.toLowerCase().includes(query.toLowerCase()) ||
                country.capital.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Country Search</h1>
            <SearchBar onSearch={handleSearch} countryList={countryData} />
            <CountryList countries={filteredCountries} />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffd9c1', // Pastel orange background
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        textAlign: 'center',
        padding: '20px',
        color: '#333',
        fontSize: '28px',
        background: '#ffffff', // Background color for heading box
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default App;
