import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './Toolview.css';
<<<<<<< HEAD
import $ from "jquery";
import axios from 'axios';
=======
import Expand from 'react-expand-animated';
>>>>>>> 163414c759f2ff8b9df758f23e88b49287c0d163

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {

    const [clicked, setClicked] = useState(false);
    const [toolSpecifics, setToolSpecifics] = useState('');

    const displayToolData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/tools/${id}`)
            .then(({data}) => {
                if (data) {
                    setToolSpecifics(data);
                }
            })
            .catch((err) => {
                setToolSpecifics(err.message);
            });
    }

    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">{Name}</label>
                <label className="price">${Price}</label>
                <label className="type">{Type}</label>
                <FaChevronCircleDown className="icon" onClick={() => displayToolData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv" style={{height: '400px', color: 'red' }}>
                    <div>{toolSpecifics.Username}</div>
                    <div>{toolSpecifics.Address}</div>
                </div>
            </Expand>

        </div>
    );
}

export default ToolView;
