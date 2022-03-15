import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import './home.scss';
import Medium from '../../assets/medium.svg';
import { stockData } from '../../Data';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(stockData)
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
                            <p>AQSE Growth Market</p>
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
                    </div>
                    <div className="icon-container"></div>
                </div>
            </div>
            <div className="tradingContainer">
                <table className="tradingContainer__table">
                    <tr>
                        {data?.map(stock => (
                            <tr>
                                <td>
                                    <span>
                                        {stock.code}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tr>
                </table>
                <div className="tradingContainer__graph"></div>
            </div>
        </div>
    )
}

export default Home;
