import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Donation = () => {
    return (
        <div>
            <h2 style={{textAlign:'center', color:'red',marginTop:'200px'}}>Working on this page.....</h2>
            <Link to='/'>   
                <Button variant="info" style={{textAlign: 'center',margin: '0 auto',display: 'block',textDecoration:'none'}}>Go to Home Page{'->>'}</Button>
            </Link> 
        </div>
    );
};

export default Donation;