import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './EventRegister.css'

const EventRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registerWork, setRegisterWork] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-tundra-88481.herokuapp.com/registerWorkList?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegisterWork(data))
    }, [])

    const history = useHistory();
    const deleteWork = id => {
        fetch(`https://aqueous-tundra-88481.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted');
            })
            history.push("/");
    }

    return (
        <>
            <div className="event-reg-bg">
                <Header></Header>
                <Container >
                    <Row>
                        {
                            registerWork.map(regWork =>
                                <Col sm='5' className="register-item">
                                    <div>
                                        <img src={regWork.image} alt="" />
                                    </div>
                                    <div>
                                        <p>{regWork.service}</p>
                                        <p>{regWork.date}</p>
                                        <Button variant="light" onClick={() => deleteWork(regWork._id)}>Cancel</Button>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default EventRegister;