import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setQuery(newValue);
        onSearch(newValue);
    };

    return (
        <div style={styles.container}>
            <TextField
                value={query}
                onChange={handleChange}
                placeholder="Search by country or capital..."
                variant="outlined"
                style={styles.input}
            />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        width: '100%',  // Full width
        maxWidth: '1200px',  // Maximum width for large screens
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        width: '100%',  // Full width of the container
    },
};

export default SearchBar;
