import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './home.scss';
import Medium from '../../assets/AXS+Logo_4C_72.png';
import { data } from '../../Data';
import Graph from '../graph/Graph';
import Menu from '../Menu/Menu';
import About from '../About/About';

const Home = () => {
    const [stockData, setStockData] = useState([])
    const [searchStock, setSearchStock] = useState('')
    const [showMenu, setShowMenu] = useState(false);
    const revealMenu = () => setShowMenu(true);
    const hideMenu = () => setShowMenu(false);
    useEffect(() => {
        setStockData(data);
    }, [])

    const filterStock = (evt) => {
        const keyword = evt.target.value
        setSearchStock(keyword)
    }

    const stocks = stockData?.stockData?.filter((stock) => {
        if(searchStock == null)
            return stock
        else if(stock?.name?.toLowerCase().includes(searchStock.toLowerCase()) || stock?.name?.toLowerCase().includes(searchStock.toLowerCase())) {
            return stock;
        }
    })

    return (
        <div className="home">
            <Navbar revealMenu={revealMenu} />
            {showMenu && <Menu hideMenu={hideMenu} />}
            <div className="cardContainer">
                <div className="cardContainer__cardInfo">
                    <div className="icon-container">
                        <img src={Medium} alt="" className="AQRU-icon" width="600" height="400" />
                    </div>
                    <div className="info">
                        <span>
                            <h2>AQRU PLC</h2>
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
                    </div><br />
                    <div className="add-container">
                        <button className="add-btn">Add Portfolio</button>
                    </div>
                    <div className="icon-container"></div>
                </div>
            </div>
            <div className="tradingContainer">
                <div className="search">
                    <h1 className="search__title">Portfolio</h1>
                    <form className="search__form">
                        <input type="search" name="search" placeholder="Search Portfolio" className="search__input" value={searchStock} onChange={filterStock} />
                    </form>
                </div>
                <hr />
                <div style={{ display: 'flex', gap: '15px' }} className="tradingContainer__card__container">
                    {stocks ? (
                        <>
                            {stocks.map(stock => (
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
                        </>
                    ) : (
                        <>
                            {stockData?.stockData?.map(stock => (
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
                        </>
                    )}
                </div>
            </div>
            <div className="graphContainer">
                <Graph />
            </div>
            <div>
                <About />
            </div>
        </div>
    )
}

export default Home;
