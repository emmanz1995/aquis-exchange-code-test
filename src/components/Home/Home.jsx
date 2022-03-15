import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import './home.scss';
import Medium from '../../assets/medium.svg';
import { data } from '../../Data';

const Home = () => {
    const [stockData, setStockData] = useState([])
    useEffect(() => {
        setStockData(stockData)
    }, [])

    return (
        <div className="home">
            <Navbar />
            <div className="cardContainer">
                <div className="cardContainer__cardInfo">
                    <div className="icon-container">
                        <img src={Medium} alt="" className="AQRU-icon" width="600" height="400" />
                    </div>
                    <div className="info">
                        <span>
                            <h2>Medium Stock</h2>
                        </span>
                        <span >
                            <p>Medium Growth Market</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <p>67.89</p> <p>+1.5%</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="cardContainer__cardJoin">
                    <h2>Want to Trade?</h2>
                    <div className="button-container">
                        <button className="btn">Buy</button>
                        <button className="btn">Sell</button>
                    </div><br />
                    <div className="add-container">
                        <button className="add-btn">Add Portfolio</button>
                    </div>
                    <div className="icon-container"></div>
                </div>
            </div>
            <div className="tradingContainer">
                <h1>Portfolio</h1>
                <div style={{ display: 'flex', gap: '15px' }} className="tradingContainer__card__container">
                    {data?.stockData?.map(stock => (
                        <div className="tradingContainer__card" key={stock?.id}>
                            <div className="card-header">
                                <h5>{stock.code}</h5>
                                <p>{stock?.price}</p>
                            </div><br/>
                            <div className="card-body">
                                <p>{stock.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tradingContainer__graph"></div>
            </div>
        </div>
    )
}

export default Home;
