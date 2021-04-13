import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../extras/download.png';

export default function Default() {
    return (
        <div className="container">
            <div className="row" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
                <img src={notFound} alt="" />
                <br />
                <p>Return to <Link to="/">Home</Link></p>
            </div>

        </div>
    )
}
