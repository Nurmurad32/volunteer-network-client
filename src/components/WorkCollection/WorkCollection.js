import React, { useEffect } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './WorkCollection.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const WorkCollection = () => {

    const [work, setWork] = useState([]);

    useEffect(()=>{
        fetch('https://aqueous-tundra-88481.herokuapp.com/totalWorkList')
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])

    return (
        <>
            <Header></Header>
                <div className="background">
                    <div className="banner">
                        <h2 className="banner-text">I GROW BY HELPING PEOPLE IN NEED.</h2>
                        <div>
                            <InputGroup className="banner-search" style={{ width: '55%'}}>
                                <FormControl placeholder="Recipient's username" style={{height:'50px'}}/>
                                <InputGroup.Append>
                                <Button variant="primary" style={{width:'118px',height:'50px' }}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            <Container style={{backgroundColor:'#F8FAFC'}}>
                <Row>
                    {
                    work.map(work=>
                        <Col sm='3'>
                            <Card style={{border:'none',marginBottom:'20px'}} >
                                <Card.Img variant="top" src={work.image} alt="Can't load" style={{marginBottom: '-10px'}} />
                                    <Card.Title className="card-text" >
                                    <Link to={"/register/"+ work._id} style={{textDecoration:'none'}}>{work.name}</Link>
                                    </Card.Title>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
            </Container>
        </>
    );
};

export default WorkCollection;