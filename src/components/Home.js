import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import './home.css'

export default function Home() {
    const history = useHistory();
    const [typedusername, settypedusername] = useState('');
    const [typedpassword, settypedpassword] = useState('');
    // const [dbusername, setdbusername] = useState('');
    // const [dbpassword, setdbpassword] = useState('');
    const [dbData, setdbData] = useState('');

    const location = useLocation();
    // const regUser = location.state && location.state.params[0].regUser;
    // const regPwd = location.state && location.state.params[0].regPwd;

    // const thankYou = document.getElementById('thankYou');

    useEffect(() => {

        axios.get('http://localhost:3000/employees')
            .then(resp => {
                const data = resp.data;
                setdbData(data);

            })
            .catch(error => {
                console.log(error);
            });

    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(typeof dbusername.toString(), typeof dbpassword.toString());
        const dbusername = dbData.filter(d => d.username === typedusername).map(d => d.username);
        const dbpassword = dbData.filter(d => d.password === typedpassword).map(d => d.password);
        console.log(dbusername, dbpassword);

        if (typedusername === dbusername[0] && typedpassword === dbpassword[0]) {
            history.push('/AllPlayers', { params: typedusername })
            //thankYou.style.display = 'block';
            // setTimeout(() => {
            //     thankYou.style.display = 'none';
            // }, 2000);
        } else {
            alert('username/password is incorrect')
        }
        settypedusername('');
        settypedpassword('');

    }
    return (
        <div className="container-fluid form-container home ">

            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label className="control-label col-sm-2" htmlFor="email">Email:</label> */}
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={typedusername} onChange={(e) => settypedusername(e.target.value)} required />
                    </div>
                </div>
                <div className="form-group">
                    {/* <label className="control-label col-sm-2" htmlFor="pwd">Password:</label> */}
                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={typedpassword} onChange={(e) => settypedpassword(e.target.value)} required />
                    </div>
                </div>
                <div className="form-group">


                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-default loginBtn">Login</button>
                        {/* <p className="text-success mt-3" id="thankYou">Thank You for Commenting...</p> */}
                    </div>

                </div>
            </form>
        </div>
    )
}
