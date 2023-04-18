import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home
            <Button><Link to ='/book'>Booking now</Link> </Button>
        </div>
    );
};

export default Home;