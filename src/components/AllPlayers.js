import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './allplayers.css';
export default function AllPlayers() {
    const data = [
        {
            id: 1,
            gender: 'men',
            img: 'player-men/shubham-gill.jpg',
            name: 'Shubman Gill',
            born: ' Sep 8, 1999 (22 years)',
            birthPlace: 'Firozpur, Jharkhand',
            role: 'All Rounder',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right Arm Off Spin'
        },
        {
            id: 2,
            gender: 'men',
            img: 'player-men/Kuldeep-Yadav.jpg',
            name: 'Kuldeep Yadav',
            born: ' Dec 14, 1994 (27 years)',
            birthPlace: 'Kanpur',
            role: ' Bowler',
            battingStyle: 'Left Handed',
            bowlingStyle: 'Left Arm Unorthodox'
        },
        {
            id: 3,
            gender: 'men',
            img: 'player-men/hardik.jpg',
            name: 'Hardik Pandya ',
            born: ' Oct 11, 1993 (28 years)',
            birthPlace: 'Choryasi, Gujarat',
            role: 'All Rounder',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right Arm Fast Seam'
        },
        {
            id: 4,
            gender: 'men',
            img: 'player-men/shreyas.jpg',
            name: 'Shreyas Iyer',
            born: ' Dec 6, 1994 (27 years)',
            birthPlace: ' Mumbai',
            role: 'Batsman',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right Arm Off Spin'
        },
        {
            id: 5,
            gender: 'men',
            img: 'player-men/virat.jpg',
            name: 'Virat Kohli',
            born: ' Nov 5, 1988 (33 years)',
            birthPlace: 'Delhi',
            role: 'Middle Order Batsman',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right Arm Medium Seam'
        },
        {
            id: 6,
            gender: 'women',
            img: 'player-women/harman-preet.png',
            name: 'Harmanpreet Kaur',
            born: 'Mar 8, 1989',
            birthPlace: '-',
            role: 'All Rounder',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right Arm Off Spin'
        },

        {
            id: 7,
            gender: 'women',
            img: 'player-women/mithali.png',
            name: 'Mithali Raj',
            born: 'Dec 3, 1982',
            birthPlace: '-',
            role: '-',
            battingStyle: 'Right Handed',
            bowlingStyle: '-'
        },
        {
            id: 8,
            gender: 'women',
            img: 'player-women/jhulan.png',
            name: 'Jhulan Goswami',
            born: 'Nov 25, 1982',
            birthPlace: '-',
            role: '-',
            battingStyle: 'Right Handed',
            bowlingStyle: 'Right-arm medium fast'
        },
        {
            id: 9,
            gender: 'women',
            img: 'player-women/ekta.png',
            name: 'Ekta Bisht',
            born: 'Feb 8, 1986',
            birthPlace: '-',
            role: '-',
            battingStyle: 'Left-hand bat',
            bowlingStyle: 'Left-arm orthodox'
        },

    ];
    const location = useLocation();
    const history = useHistory();
    const myparam = location.state && (location.state.params.charAt(0).toUpperCase() + location.state.params.slice(1));
    const [team, setteam] = useState('men');
    const [playerTeam, setplayerTeam] = useState(data);
    //const [radioChecked, setradioChecked] = useState(false);
    const [chosenPlayer, setchosenPlayer] = useState('')
    const [chosenPlayerImage, setchosenPlayerImage] = useState('')
    const [dayTimes, setdayTimes] = useState('');

    useEffect(() => {
        setplayerTeam(data.filter(d => d.gender === team));
        //console.log(playerTeam);
        // console.log(playerTeam.sort())
    }, [team])

    useEffect(() => {
        let dt = new Date();
        let hours = dt.getHours();
        if (hours >= 0 && hours < 12) {
            setdayTimes("Good Morning!");
        } else if (hours >= 12 && hours <= 18) {
            setdayTimes("Good Afternoon!");

        } else {
            setdayTimes("Good Evening!");

        }

        if (!myparam) {

            history.push('/')
        }
    }, [])

    const handleSelectChange = (e) => {
        //console.log(e.target.value);
        setteam(e.target.value)
    }

    // useEffect(() => {
    //     console.log(elementRef.current);
    // }, []);

    const handleChoosePlayer = (e, player) => {
        document.getElementById(e.target.id).innerHTML = 'Chosen';
        document.getElementById(e.target.id).className = 'btn btn-success';
        setchosenPlayer(player);
        setTimeout(() => {
            document.getElementById(e.target.id).innerHTML = 'Choose';
            document.getElementById(e.target.id).className = 'btn btn-info';
        }, 1500);
        // console.log(player);
        setchosenPlayerImage(require(`./assets/${player.img}`));

    }

    const handleLogout = (e) => {
        setplayerTeam('');
        setdayTimes('');
        setteam('');
        setchosenPlayer('');
        setchosenPlayerImage('');
        history.push('/');
    }



    return (
        <div className="container allplayers">
            <div className="row text-right">

                <h4>Hi {myparam}, {dayTimes} <button className="btn btn-danger" type="button" onClick={handleLogout}>Logout</button></h4>

            </div>

            <div className="row highlighted mb-10" style={{ marginTop: '30px' }}>
                <div className="col-lg-12">
                    <h2>Highlighted Player</h2>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-5">
                        <div className="imgContainer">
                            <img src={chosenPlayerImage.default} alt="" className="img-circle chosenPlayer" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="detailContainer">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name:</th>
                                        <td>{chosenPlayer.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Born:</th>
                                        <td>{chosenPlayer.born}</td>
                                    </tr>
                                    <tr>
                                        <th>Birth Place:</th>
                                        <td>{chosenPlayer.birthPlace}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>{chosenPlayer && chosenPlayer.gender.charAt(0).toUpperCase() + chosenPlayer.gender.slice(1)}</td>
                                    </tr>
                                    <tr>
                                        <th>Role:</th>
                                        <td>{chosenPlayer.role}</td>
                                    </tr>
                                    <tr>
                                        <th>Batting Style:</th>
                                        <td>{chosenPlayer.battingStyle}</td>
                                    </tr>
                                    <tr>
                                        <th>Bowling Style:</th>
                                        <td>{chosenPlayer.bowlingStyle}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mb-10">
                <div className="col-lg-12">

                    <hr style={{ border: '1px solid #ccc' }} />
                </div>
            </div>
            <div className="row mb-10" style={{
                height: '920px', backgroundColor: '#274993', color: '#fff'
            }}>
                <div className="col-lg-12">
                    <h2 className="text-center" style={{ marginTop: '50px' }}>All Players</h2>
                    <div className="playerCategory form-group" >
                        <label htmlFor="playerCategory">Select Team: &nbsp;</label>
                        <select name="playerCategory" id="playerCategory" onChange={handleSelectChange} value={team} className="form-control" style={{ width: '300px' }}>
                            {/* <option value="select">Select</option> */}
                            <option value="men">Indian Mens Team </option>
                            <option value="women">Indian Womens Team</option>
                        </select>
                    </div>

                    <ul className="allPlayers">
                        {playerTeam.sort(function (a, b) {
                            return a - b;
                        }).map((player, index) => {
                            const img = require(`./assets/${player.img}`);
                            return (
                                <li className="card" key={index}>
                                    <img className="card-img-top img-fluid" src={img.default} alt="Card image" />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{player.name}</h4>
                                        {/* <input type="radio" id={player.id} onClick={handleRadioChange} /> */}
                                        <br /><br />
                                        <button className='btn btn-info' id={player.id} onClick={(e) => handleChoosePlayer(e, player)}>Choose</button>
                                    </div>
                                </li>
                            )

                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}
