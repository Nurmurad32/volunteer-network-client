import React from 'react';
import './AddList.css';
import logo from '../../images/Group 1329.png';
import userLogo from '../../images/users-alt 1.png';
import addLogo from '../../images/plus 1.png';
import {  Button, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import uploadIcon from '../../images/cloud-upload-outline 1.png';


const AddList = () => {
    const { register, errors, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = data =>{
        fetch('https://aqueous-tundra-88481.herokuapp.com/addWork',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        history.push("/");
    }
    return (
        <div>
            <div className="admin-area">
                <div className="admin-logo-text">
                <Link to="/"><img className="admin-logo" src={logo} alt=""/></Link> 
                    <h2 style={{marginLeft: '130px'}}>Add event</h2>
                </div>
                <Row>
                    <Col sm='3'>
                <div className="admin-column">
                    <img src={userLogo} alt=""/>
                    <p>Add event</p>
                </div>
                <Link to="/registerList">
                    <div className="admin-column">
                        <img src={addLogo} alt=""/>
                        <p>Volunteer register list</p>
                    </div>
                </Link>
                    </Col>
                    <Col sm='9'className="register-list-bg">
                    <form action="/addWork" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{display:'flex'}} className="add-list-area">
                            <div style= {{width:'45%'}}>
                                <label for="ename" >Event Title</label> <br/>
                                <input name="name" type="text"  placeholder="Event Title" ref={register({ required: true })} />
                                {errors.name && <span className="errors">Event title is required</span>}
                                <br/>
                                <label for="description" style={{marginTop: '20px'}}>Description</label>
                                <textarea id="description" placeholder="Enter Description" type="text" name="des" ref={register({ required: true })}></textarea>
                                {errors.des && <span className="errors">Enter Description is required</span>}
                            </div>
                            <div style= {{width:'45%',marginLeft: '30px'}}>
                                <label for="date">Event Date</label> <br/>
                                <input name="date" type="date" placeholder="Date" ref={register({ required: true })} />
                                {errors.date && <span className="errors">"Date is required"</span>}
                                <br/>
                                <label for="img" style={{marginTop: '20px'}}>Banner</label>
                                <Button type="file" id="img" name="img" accept="image/*" style={{display: 'block',backgroundColor: '#E5F3FF',color: '#0084FF'}}><img src={uploadIcon} alt="" style={{height:'24px',width:'24px'}}/> Upload image</Button>
                                {/* <input type="file" id="img" name="img" accept="image/*" /> */}
                            </div>
                        </div>
                        <input  type="submit" style={{float:'right',marginRight:'25px',backgroundColor: '#0084FF',border: 'none',color: 'white',width: '108px',height: '37px',borderRadius: '5px'}}/>
                    </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AddList;