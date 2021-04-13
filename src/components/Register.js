import React, { useState, useEffect } from 'react'
import './register.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default function Register() {
    const history = useHistory();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [getDbData, setgetDbData] = useState([]);

    const thankYou = document.getElementById('thankYou');

    useEffect(() => {
        axios.get('http://localhost:3000/employees')
            .then(resp => {
                const data = resp.data;
                setgetDbData(data);

            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(username);
        let userExist = getDbData.map(d => d.username).indexOf(username) > -1;
        if (userExist) {
            alert('User already exists');
            setusername('');
            setpassword('');
            setemail('');
            return false;
        } else {
            axios.post('http://localhost:3000/employees', {
                username: username.trim().toLowerCase(),
                password: password.trim().toLowerCase(),
                email: email.trim().toLowerCase()
            }).then(res => {
                history.push('/')
                // history.push('/', { params: [{ 'regUser': username, 'regPwd': password }] })
                //console.log(res.data);
                thankYou.innerHTML = 'Thank you for registering with us';
            }).catch(err => {
                thankYou.innerHTML = 'Some error occured';
                //console.log(err);
            })
            setusername('');
            setpassword('');
            setemail('');
            setTimeout(() => {
                thankYou.innerHTML = '';
            }, 2000);
        }

    };
    return (
        <div className="register">
            <form className="regForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={username} onChange={e => setusername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={e => setemail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={password} onChange={e => setpassword(e.target.value)} required />
                </div>

                {/* <div class="checkbox">
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                </div> */}
                <button type="submit" className="btn btn-default regBtn">Register</button>
                <p className="thank-you" id="thankYou"></p>
            </form>
        </div>
    )
}
