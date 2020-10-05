import React, { useContext, useEffect, useState } from 'react';
import {  Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css';
import logo from '../../images/Group 1329.png';
import { UserContext } from '../../App';

const Register = () => {
    const {workId} = useParams();
    console.log(workId);

    const [volunteerWork,setVolunteerWork] = useState({});
    useEffect(()=>{
        fetch('https://aqueous-tundra-88481.herokuapp.com/register/'+workId)
        .then(res=>res.json())
        .then(data=>setVolunteerWork(data))
    },[workId])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, errors, handleSubmit } = useForm();

    const history = useHistory();
    const onSubmit = data =>{
        fetch('https://aqueous-tundra-88481.herokuapp.com/registerUser',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        history.push("/event");
    }

        return (
        <div className="register-bg">
            <div className="reg-img">
                <Link to="/"> <img src={logo} alt=""/></Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form" action="/registerUser" method="post">
                <h2>Register as a Volunteer</h2>
                <input name="firstName" type="text" defaultValue={loggedInUser.name} placeholder="Full Name" ref={register({ required: true })} />
                {errors.firstName && <span className="errors">Full name is required</span>}

                <input name="email" type="email" defaultValue={loggedInUser.email} placeholder="Email" ref={register({ required: true })} />
                {errors.email && <span className="errors">"Email is required"</span>}

                <input name="date" type="date" placeholder="Date" ref={register({ required: true })} />
                {errors.date && <span className="errors">"Date is required"</span>}

                <input name="des" type="text" placeholder="Desicription" ref={register({ required: true })} />
                {errors.des && <span className="errors">"Desicription is required"</span>}

                <input name="service" type="text" defaultValue={volunteerWork.name} placeholder="Want to service" ref={register({ required: true })} />
                {errors.service && <span className="errors">"Service name is required"</span>} 

                {/* <Link to="/event"> */}
                    <input type="submit" style={{border: 'none',backgroundColor: '#3F90FC',height: '48px',color: 'white'}}/>
                {/* </Link> */}
            </form>
        </div>
    );
};

export default Register;