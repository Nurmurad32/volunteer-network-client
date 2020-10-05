import React, { useEffect, useState } from 'react';
import './RegisterList.css';
import logo from '../../images/Group 1329.png';
import userLogo from '../../images/users-alt 1.png';
import addLogo from '../../images/plus 1.png';
import { Col, Row, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import deleteIcon from '../../images/trash-2 9.png'

const RegisterList = () => {

    const [registerWork, setRegisterWork] = useState([]);

    useEffect(()=>{
        fetch('https://aqueous-tundra-88481.herokuapp.com/totalRegisterList')
        .then(res=>res.json())
        .then(data=>setRegisterWork(data))
    },[])

    const history = useHistory();

    const deleteWork = (id )=>{
        fetch(`https://aqueous-tundra-88481.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin' : '*'
               },
        })
        .then(res=>res.json())
        .then(result=>{
            
        })
        history.push("/");
    }
    return (
        <div >
            <div className="admin-area">
                <div className="admin-logo-text">
                <Link to="/">   <img className="admin-logo" src={logo} alt=""/></Link> 
                    <h2 style={{marginLeft: '130px'}}>Volunteer register list</h2>
                </div>
                <Row>
                    <Col sm='3'>
                <div className="admin-column">
                    <img src={userLogo} alt=""/>
                    <p>Volunteer register list</p>
                </div>
                <Link to="/AddList">
                    <div className="admin-column">
                        <img src={addLogo} alt=""/>
                        <p>Add event</p>
                    </div>
                </Link>
                    </Col>
                    <Col sm='9'className="register-list-bg">
                    <table  className="table">
                        <thead>
                            <tr className="table-row">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registation Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    registerWork.map(regWork=>
                                    <tr >
                                        <td>{regWork.firstName}</td>
                                        <td>{regWork.email}</td>
                                        <td>{regWork.date}</td>
                                        <td>{regWork.service}</td>
                                        <td><img src={deleteIcon} alt="" style={{height:'21px',width:'21px',backgroundColor:'red'}}
                                        onClick={()=>deleteWork(regWork._id)}/></td> 
                                    </tr>   
                                    )
                                }
                        </tbody>
                    </table>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default RegisterList;