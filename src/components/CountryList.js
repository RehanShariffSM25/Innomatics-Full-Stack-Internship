import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGlobeAmericas } from 'react-icons/fa';

const CountryList = ({ countries }) => {
    return (
        <div style={styles.container}>
            {countries.length > 0 ? (
                countries.map((country, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card style={styles.card} elevation={3}>
                            <CardContent>
                                <Typography variant="h5" style={styles.countryName}>
                                    <FaGlobeAmericas style={styles.icon} />
                                    {country.country}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Capital:</strong> {country.capital}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Population:</strong> {country.population.toLocaleString()}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Currency:</strong> {country.currency}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))
            ) : (
                <Typography variant="h6" color="textSecondary">
                    No results found.
                </Typography>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
        gap: '15px',
    },
    card: {
        width: '250px',
        margin: '15px',
        borderRadius: '15px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff, #f9f9f9)',
    },
    countryName: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    icon: {
        color: '#ff7e5f',
        fontSize: '24px',
    },
};

export default CountryList;
